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
                    let img = $(this).children().children().children("img").attr("src").trim();
                    let summary = $(this).children("p").text().trim();
                    
                    articles.push({ title, link, img, summary });
                })

                res.json(articles);
            })
            .catch(err => res.status(422).json(err));
    }
};