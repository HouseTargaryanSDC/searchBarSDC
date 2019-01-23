const fs = require('fs');
const faker = require('faker');

let writeRestaurantStream = fs.createWriteStream('/Users/daniellin215/Desktop/searchBarSDC/database/csv/restaurants.csv', { encoding: 'utf8'});
let writeCitiesStream = fs.createWriteStream('/Users/daniellin215/Desktop/searchBarSDC/database/csv/cities.csv', { encoding: 'utf8'});
let writeCuisinesStream = fs.createWriteStream('/Users/daniellin215/Desktop/searchBarSDC/database/csv/cuisines.csv', { encoding: 'utf8'});

// restaurant csv 10M
let startRestaurant = Date.now();
function writeNRestaurants(writer, n, callback) {
  let i = n;
  write();
  function write() {
    var ok = true;
    do {
      i --;
      // let data = `"${i}" "${faker.internet.userName}" \n`;
      //  let randomCity = `"${i}" "${faker.address.city}" \n`;
      //  let randomCuisine = `"${i}" "${faker.random.word}" \n`;
      if (i === 0) {
        writer.write(`${i},${faker.internet.userName()}\n`, callback);
      } else {
        ok = writer.write(`${i},${faker.internet.userName()}\n`);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

writeNRestaurants(writeRestaurantStream, 10000000, () => {
  writeRestaurantStream.end();
  let runtime = Date.now() - startRestaurant;
  console.log('runtime for restaurant csv is ', runtime/1000, ' seconds');
})

// city csv, 1M
let startCity = Date.now();
function writeNCities(writer, n, callback) {
  let i = n;
  write();
  function write() {
    var ok = true;
    do {
      i --;
      // let data = `"${i}" "${faker.address.city}" \n`;
      //  let randomCuisine = `"${i}" "${faker.random.word}" \n`;
      if (i === 0) {
        writer.write(`${i},${faker.address.city()}\n`, callback);
      } else {
        ok = writer.write(`${i},${faker.address.city()}\n`);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

writeNCities(writeCitiesStream, 1000000, () => {
  writeCitiesStream.end();
  let runtime = Date.now() - startCity;
  console.log('runtime for cities csv is ', runtime/1000, ' seconds');
})

// cuisine csv, 100k
let startCuisine = Date.now();
function writeNCuisines(writer, n, callback) {
  let i = n;
  write();
  function write() {
    var ok = true;
    do {
      i --;
      //  let randomCuisine = `"${i}" "${faker.random.word}" \n`;
      if (i === 0) {
        writer.write(`${i},${faker.internet.userName()}\n`, callback);
      } else {
        ok = writer.write(`${i},${faker.internet.userName()}\n`);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

writeNCuisines(writeCuisinesStream, 100000, () => {
  writeCuisinesStream.end();
  let runtime = Date.now() - startCuisine;
  console.log('runtime for cuisines csv is ', runtime/1000, ' seconds');
})

// without Drain
// for (let i = 0; i < 10; i++ ) {
  //   writeStream.write(content, 'utf-8');
  // }
  
  // writeStream.on('finish', () => {
    //   console.log('wrote data to file');
    // });
    
    // writeStream.end();
