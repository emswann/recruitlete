const express = require("express");
const app = express();
const cheerio = require("cheerio");
const fs = require("fs");
const request = require("request");

module.exports = {
    findAll: (req, res) => {

        url = "https://volleymob.com/news/";

        request(url, (error, response, html) => {

            if(!error) {

                var $ = cheerio.load(html);

                $(".item").each(function(i, elem) {
                    var title = $(this).children().children("a").text().trim();
                    var link = $(this).children().children("a").attr("href").trim();
                    
                    var json = { title : "", link : ""};
                    json.title = title;
                    json.link = link;
                    console.log(json);

                });

                    //.then
                    //.catch

            }
        })
    }
};