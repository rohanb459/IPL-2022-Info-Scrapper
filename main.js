const url = ("https://www.espncricinfo.com/series/indian-premier-league-2022-1298423");
let request = require("request");
let cheerio = require("cheerio");

request(url, cb);

function cb(err, response, html)
{
    if(err)
    console.log(err);
    else
    {
        extractLink(html);
    }
    // console.log(html);
}

function extractLink(html)
{
    let $ = cheerio.load(html);
    let anchorElem = $(".ds-block.ds-text-center");
    let link = anchorElem.attr("href");
    
    let fullLink = "https://www.espncricinfo.com"+link;
    console.log(fullLink);
}