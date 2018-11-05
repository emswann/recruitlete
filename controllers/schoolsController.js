const cheerio = require("cheerio");
const rp = require("request-promise");

module.exports = {

  findAll: (req, res) => {

    const options = {
      uri: 'https://www.ncsasports.org/womens-volleyball/division-1-colleges',
      transform: (body) => cheerio.load(body)
    }

    rp(options)
    .then($ => {
      let collegeList = $('div.college-list-container');
      let schools = [];

      $('div.college-list-container div.college-list[id^=school]')
      .each((i, college) => {                    
        schoolData = {};
                    
        schoolData.name = 
          $(college).find('.college-list-college a').text().trim();
        schoolData.collegeLink = 
          $(college).find('.college-list-college a').attr('href');
        schoolData.city =   
          $(college).find('.college-list-city-state').children().eq(0).text().trim(); 
        schoolData.state = 
          $(college).find('.college-list-city-state').children().eq(1).text().trim();
        schoolData.region = 
          $(college).find('.college-list-region').text().trim();
        schoolData.conference = 
          $(college).find('.college-list-conference').text().trim();
        schoolData.conferenceLink = ' ';
        schoolData.division = 
          $(college).find('.college-list-division').text().trim();

        schools.push(schoolData);
      });

      res.json(schools);
    })
    .catch(err => res.status(422).json(err));
  }
};