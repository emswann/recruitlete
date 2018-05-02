const cheerio = require("cheerio");
const rp = require("request-promise");

module.exports = {

    findAll: (req, res) => {

        var options = {
            uri: 'https://volleymob.com/news/',
            transform: (body) => cheerio.load(body)
        }

        rp(options)
            .then(($) => {

                $(".item").each(function (i, elem) {
                    var title = $(this).children().children("a").text().trim();
                    var link = $(this).children().children("a").attr("href").trim();

                    var json = { title: "", link: "" };
                    json.title = title;
                    json.link = link;
                    console.log(json)
                })
            })
            .catch((err) => res.status(422).json(err));
    }
};