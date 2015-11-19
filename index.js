// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })

var http = require('http');
var sitemap = require('sitemapper');
var urls = '';

sitemap.getSites(process.argv.slice(2)[0], function(err, sites){
    if(!err) {
      urls = sites;

      for(var key in urls) {
        var url = urls[key];
        console.log(url);
        // console.log(value);
        http.get(url, function(res) { })
          .on('error', function(e) { console.log("Got error: " + e.message, " : " + url); });
      }

      // console.log(Object.keys(urls));
    }
    else {
      console.log(error);
    }
});






// var urls = ['http://example.com/docs/guide/', 'http://www.google.com.au', 'http://www.blahasdf.com'];
// var urls = ['http://adrianmejia.com/atom.xml', 'http://twitrss.me/twitter_user_to_rss/?user=amejiarosario'];
var completed_requests = 0;


// urls.forEach(function(url) {
//   // var responses = [];


//   http.get(url, function(res) {
//   //   console.log("Got response: " + res.statusCode, " : " + url);
//     }).on('error', function(e) {
//       console.log("Got error: " + e.message, " : " + url);
//     });

//   // http.get(url, function(res) {
//     // console.log(responses)
//     // console.log(res.statusCode);
//     // console.log({status: res.statusCode, url: url});
//     // res.on('data', function(chunk){
//     //   console.log(chunk)
//     //   responses.push(chunk);
//     // });

//     // res.on('end', function(){
//     //   if (completed_requests++ == urls.length - 1) {
//     //     // All downloads are completed
//     //     // console.log('body:', responses.join());
//     //     console.log(responses);
//     //   }
//     // });
//   // });
// //   }).on('error', function(e){
// //     console.log(url);
// //   }).on('end', function(){
// //     console.log('end');
// //   });
// });


// process.exit(1);

// var http = require('http');
// var responses = [];
// var completed_requests = 0;

// var urls = ['http://example.com/docs/guide/',
//     'http://www.google.com.au',
//     'http://www.blahasdf.com']


// for (url in urls) {
//   http.get(url, function(res) {
//     responses.push(res.body);
//     completed_request++;
//     if (completed_request == urls.length) {
//         // All download done, process responses array
//     }
//   });
// }



// var roboto = require('roboto');
// // var roboto = require('../lib/roboto');
// // var _ = require('underscore');

// var urls = ['http://example.com/docs/guide/',
//     'http://www.google.com.au',
//     'http://www.blahasdf.com']

// var crawler = new roboto.Crawler({
//   startUrls: urls,
//   allowedDomains: urls,
//   // We don't want it crawling outside links.
//   constrainToRootDomains: true,
//   maxDepth: 1,
//   obeyRobotsTxt: false
// });

// var deadLinks = [];

// crawler.on('httpError', function(statusCode, href, referer) {
//   if (statusCode === 404) {
//     deadLinks.push({
//       href: href,
//       referer: referer
//     });
//   }
// });

// crawler.on('finish', function() {
//   deadLinks.forEach(function(deadLink) {
//   // _.each(deadLinks, function(deadLink) {
//     console.log('Dead link: %s  found on page: %s', deadLink.href, deadLink.referer);
//   });
// });

// crawler.crawl();