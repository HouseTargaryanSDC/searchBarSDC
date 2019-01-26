const { connection } = require('./index.js');
const { sequelize } = require('./index.js');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


const Cities = sequelize.define('cities', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    cities: Sequelize.STRING,
    newcol: Sequelize.STRING

}, {
        timestamps: false
    });
const Restaurants = sequelize.define('restaurants', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    restaurantname: Sequelize.STRING,
    newcol: Sequelize.STRING,
}, {
        timestamps: false
    });
const Cuisines = sequelize.define('cuisines', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    cuisinename: Sequelize.STRING,
    newcol: Sequelize.STRING,
}, {
        timestamps: false
    });

sequelize.sync();


// const searchForCities = (metro, callback) => {
//     connection.query(`SELECT * FROM cities WHERE metroId = (SELECT id FROM metros WHERE metro = '${metro}')`, function (err, result) {
//         if (err) {
//             callback(err);
//         }
//         else {
//             callback(null, result);
//         }
//     })
// }

const queryCategories = (query, callback) => {
  let result = {};
  sequelize.query(`select * from cities where newcol @@ to_tsquery('${query}') limit 5`, {type: sequelize.QueryTypes.SELECT})
  .then(cities => {
    let arr = [];
    cities.forEach((city) => {
      arr.push(city.cities)
    })
    result['cities'] = arr;
    sequelize.query(`select * from cuisines where newcol @@ to_tsquery('${query}') limit 5`, {type: sequelize.QueryTypes.SELECT})
    .then(cuisines => {
        let arr = [];
        cuisines.forEach((cuisine) => {
          arr.push(cuisine.cuisinename)
        })
        result['cuisines'] = arr;
        sequelize.query(`select * from restaurants where newcol @@ to_tsquery('${query}') limit 5`, {type: sequelize.QueryTypes.SELECT})
        .then((restaurants) => {
          let arr = [];
          restaurants.forEach((restaurant) => {
              arr.push(restaurant.restaurantname)
          })
          result['restaurants'] = arr;
          callback(null, result);
        })
        })
    })
    .catch(err => {
        console.error(err);
    })
  }

// const queryCategories = (query, callback) => {
//     let result = {};
//     Cities.findAll({
//         where: {
//             cities: {
//                 [Op.like]: `%${query}%`
//             }
//         }
//     })
//         .then(data => {
//             result['cities'] = data;
//             Cuisines.findAll({
//                 where: {
//                     cuisinename: {
//                         [Op.like]: `%${query}%`
//                     }
//                 }
//             })
//                 .then(data2 => {
//                     result['cuisines'] = data2;
//                     Restaurants.findAll({
//                         where: {
//                             restaurantname: {
//                                 [Op.like]: `%${query}%`
//                             }
//                         }
//                     })
//                         .then(data => {
//                             result['restaurants'] = data;
//                             callback(null, result)
//                         })
//                 })
//         })
//         .catch(err => {
//             callback(err);
//         })
// }

const addCategories = (city, restaurant, cuisine, callback) => {
    Cities.create({
        cities: city,
    })
    .then(() => {
        console.log('added into cities')
        return Cuisines.create({
            cuisines: cuisine,
        }).then(() => {
          console.log('added into cuisines')
          return Restaurants.create({
          restaurantname: restaurant,
          }).then(() => {
              console.log('added into restaurant')
              callback();
          })
        })
    })
    .catch(err => {
        console.error(err)
    })
}

// const deleteCategories = ( cuisine, callback) => {
//     Cities.destroy({
//         where: {
//             cities: `${city}`
//         }
//     })
//     .then(() => {
//         return Restaurants.destroy({
//             where: {
//                 restaurantname: `${restaurant}`
//             }
//         })
//         .then(() => {
//             return Cuisines.destroy({
//                 where: {
//                     cuisines: `${cuisine}`
//                 }
//             })
//             .then(() => {
//                 console.log('deleted')
//             })
//         })
//     })
//     .catch(err => {
//         console.error(err)
//     })
// }
const deleteCategories = (cuisine, callback) => {
    Cuisines.destroy({
        where: {
            cuisinename: cuisine
        }
    })
    .then(() => {
        console.log('deleted cuisine', cuisine)
        callback();
    })
    .catch(err => {
        console.error(err)
    })
}

const editCategories = (cuisine, newName, callback) => {
    Cuisines.update({
        cuisinename: {
            newName
        },
            where: {
                cuisinename: cuisine
            }
        })
        .then(res => {
            console.log('updated')
            callback();
        })
        .catch(err => {
            console.error(err)
        })
}


module.exports = { editCategories, deleteCategories, queryCategories, Cities, Restaurants, Cuisines, addCategories }