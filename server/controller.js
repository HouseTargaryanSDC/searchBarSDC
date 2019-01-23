const { searchForCities, queryCategories, addCategories, deleteCategories, editCategories } = require('../database/dbHelpers.js');

const getCities = (req, res) => {
    const metro = req.params.metro;
    searchForCities(metro, (err, data) => {
        if (err) {
            res.status(404).send(err)
        }
        else { res.status(200).send(data) }
    })
}

const getSearchResults = (req, res) => {
    const searched = req.params.searched;
    console.log('lmao',searched);
    queryCategories(searched, (err, data) => {
        if (err) {
            console.log('errrrrr', err)
            res.status(404).send(err)
        }
        else { console.log('yeet', data);
            res.status(200).send(data) }
    })
}

const addData = (req, res) => {
    const {city, restaurant, cuisine} = req.body;
    addCategories(city, restaurant, cuisine, (err, data) => {
        if (err) {
            console.error(err)
        } 
        res.status(201).send(data);
    })
}

const deleteData = (req, res) => {
    const { cuisine} = req.params;
    deleteCategories( cuisine, (err) => {
        if (err) {
            console.error(err)
        }
        res.status(201).send('deleted');
    })
}

const editData = (req, res) => {
    const {cuisine, newName} = req.params;
    editCategories(cuisine, newName, (err) => {
        if (err) {
            console.error(err)
        }
        res.status(201).send('edited')
    })
}

module.exports = { getCities, getSearchResults, addData, deleteData, editData };