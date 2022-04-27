// The project is not completed yet waiting for IPL to finish down.

const url = ("https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/match-results");
let request = require("request");
let cheerio = require("cheerio");

request(url, cb);

function cb(err, response, html)
{
    if(err)
    console.log(err);
    else
    {
        extractMatchLink(html);
    }
    // console.log(html);
}

function extractMatchLink(html)
{
    let $ = cheerio.load(html);
    let cardLinksArr = $(".ds-px-4.ds-py-3>a");
    let scoreCardLinkArr=[];
    for(let i=0; i<cardLinksArr.length; i++)
    {
        let scoreCardLink = cardLinksArr[i].attribs.href;
        scoreCardLink = "https://www.espncricinfo.com"+ scoreCardLink;
        scoreCardLinkArr.push(scoreCardLink);
    }
    console.log(scoreCardLinkArr);
    // console.log(cardLinksArr);
}
