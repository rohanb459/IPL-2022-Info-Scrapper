// The project is not completed yet waiting for IPL to finish down.

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
    console.log(anchorElem);
    let link = anchorElem.attr("href");
    
    let fullLink = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/match-results";
    console.log("--------------------------------");
    console.log(fullLink);
    getAllMatchesLink(fullLink);
}
function getAllMatchesLink(url)
{ 
    request(url, function (err, response, html){
        if(err)
        console.log(err);
        else
        extractMatchLink(html);
    })
}

function extractMatchLink(html)
{
    let $ = cheerio.load(html);
    let cardLinksArr = $("div.ds-px-4.ds-py-3>a");
    // console.log(cardLinksArr);
    // console.log(cardLinksArr.length);
    // let scoreCardLinks=[];
    // for(let i=0; i<cardLinksArr.length; i++)
    // {
    //     let tempLink = cardLinksArr[i].attribs["href"];
    //     if(tempLink.includes("full-scorecard"))
    //     console.log(tempLink);
    // }
    // console.log("`````````````````````````````````");
    // console.log(scoreCardLinks);
    
}