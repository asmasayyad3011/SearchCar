const express = require('express');
const { MongoClient } = require('mongodb');

const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

const url = 'mongodb://localhost:27017';
const database = 'car_data';
const client = new MongoClient(url);

app.use(express.json());

app.get('/data', async (req, res) => {
  try {
    // res.header('Access-Control-Allow-Origin', '*');
    const query = {};
    query.Fuel_type = req.query.fuelType;
    query.Brand = req.query.selectbrand;
    query.transmission = req.query.transmission;
    query.body_type = req.query.bodyType;
    // query.price = req.query.Price;

    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('product_info');
    let response = await collection.find(query).toArray();
    // console.log(req.fuelType);
    // console.log('req.query',req.query);
    // console.log('res',response);
    res.json(response);
  } catch (error) {
    // console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/brands', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(database);
    const collection = db.collection('product_info');

    const brands = await collection.distinct('Brand');
    console.log(brands);
    res.json(brands);
  } catch (error) {
    res.json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});