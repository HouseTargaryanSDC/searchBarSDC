var http = require('http');
var app = require('./app.js');
  // var elasticsearch = require('elasticsearch');
  // const async = require('async');
var server = http.createServer(app);
var PORT = 9004;

server.listen(PORT, (err) => {
    if (err) {
        console.log('error', err)
    } else {
        console.log('His Power Level...Its Over...', PORT)
    }
});

// var client = new elasticsearch.Client({
//     hosts: ['localhost:9200'],
//     log: 'trace',
//     sniffOnStart: true,
//     sniffInterval: 60000,
// });

// client.ping({
//     requestTimeout: 30000,
//   }, function (error) {
//     if (error) {
//       console.error('elasticsearch cluster is down!');
//     } else {
//       console.log('All is well');
//     }
//   });

//   var searchCities = {
//       index: 'restaurants',
//       body: {
//         query: {
//             wildcard: {
//               restaurantname: {
//                 value: "Daniel*"
//               }
//             }
//           }
//       }
//   };

//   client.search(searchCities)
//   .then((res) => {
//       let hits = res.hits.hits;
//     },
//         (err) => {
//             console.trace(err.message);
//         }
//   )

// async function search(){
//     console.log('fuck')
//     const res = await client.search({
//         index:'restaurants',
//         type:'keyword',
//         body: {
//             query: {
//                 wildcard: {
//                     restaurantname: {
//                         value: "Daniel*"
//                     }
//                 }
//             }
//         }
//     });
//     console.log('yeet', res)
//     return res;
//   }

//   search();

