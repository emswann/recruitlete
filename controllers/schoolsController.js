const cheerio = require("cheerio");
const rp = require("request-promise");

module.exports = {

    findAll: (req, res) => {

        const options = {
            uri: 'http://web1.ncaa.org/onlineDir/exec2/sponsorship?sortOrder=0&division=All&sport=WVB',
            transform: (body) => cheerio.load(body)
        }

        rp(options)
            .then($ => {

                let schools = [];

                $("tr").each(function (i, elem) {
                    let name = $(this).children().children().first().text().trim();
                    let conference = $(this).children().children().children().eq(1).text().trim();
                    let division = $(this).children().children().eq(2).text().trim();
                    let state = $(this).children().children().eq(4).text().trim();
                    let region = $(this).children().children().eq(5).text().trim();
                    let collegeLink = $(this).children().children().children().attr("href");
                    let conferenceLink = $(this).children().children().children().eq(1).attr("href");

                    if (!(i === 0 || i === 1 || name.includes("Test"))) {
                        schools.push({ name, conference, division, state, region, collegeLink, conferenceLink });
                    };

                });

                res.json(schools);
            })
            .catch(err => res.status(422).json(err));
    }
};