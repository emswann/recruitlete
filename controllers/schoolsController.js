const cheerio = require("cheerio");
const rp = require("request-promise");

// Promise function to scrape webpage. Returns results for single division.
const getCollegeByDivision = uri => 
  new Promise((resolve, reject) => {
    const options = {
      uri,
      transform: (body) => cheerio.load(body)
    }

    rp(options)
    .then($ => {
      let collegeList = $('div.college-list-container');
      let colleges = [];

      // Include id so header is ignored.
      $('div.college-list-container div.college-list[id^=school]')
      .each((i, college) => {                    
        collegeData = {};
                        
        collegeData.name = 
          $(college).find('.college-list-college a').text().trim();
        collegeData.collegeLink = 
          $(college).find('.college-list-college a').attr('href');
        collegeData.city =   
          $(college).find('.college-list-city-state').children().eq(0).text().trim(); 
        collegeData.state = 
          $(college).find('.college-list-city-state').children().eq(1).text().trim();
        collegeData.region = 
          $(college).find('.college-list-region').text().trim();
        collegeData.conference = 
          $(college).find('.college-list-conference').text().trim();
        collegeData.conferenceLink = ' ';
        collegeData.division = 
          $(college).find('.college-list-division').text().trim();

        colleges.push(collegeData);
      })
      return colleges;
    })
    .then(colleges => resolve(colleges))
    .catch(error => reject(error));
  });

// Promise All function which returns an array containing division results.
const getColleges = uris => 
  Promise.all(uris.map(uri => getCollegeByDivision(uri)));

module.exports = {

  findAll: (req, res) => {
    let uris = [
      'https://www.ncsasports.org/womens-volleyball/division-1-colleges',
      'https://www.ncsasports.org/womens-volleyball/division-2-colleges',
      'https://www.ncsasports.org/womens-volleyball/division-3-colleges',
      'https://www.ncsasports.org/womens-volleyball/naia-colleges',
      'https://www.ncsasports.org/womens-volleyball/junior-colleges'
    ];

    getColleges(uris)
    .then(collegeByDivisionArray => {
      // Combine college by division results into one array.
      let allColleges = collegeByDivisionArray.reduce((a, b) => [...a, ...b])
      res.json(allColleges);
    })
    .catch(err => res.status(422).json(err));
  }
};