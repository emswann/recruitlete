const cheerio = require("cheerio");
const rp = require("request-promise");

module.exports = {

    findAll: (req, res) => {

        const options = {
            uri: 'https://volleymob.com/news/',
            transform: (body) => cheerio.load(body)
        }

        rp(options)
            .then($ => {

                let articles = [];
                $(".item").each(function (i, elem) {
                    let title = $(this).children().children("a").text().trim();
                    let link = $(this).children().children("a").attr("href").trim();
                    
                    articles.push({ title, link });
                })

                res.json(articles);
            })
            .catch(err => res.status(422).json(err));
    }
};