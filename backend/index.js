import fetch from "node-fetch";
import express from "express";
import cors from "cors";

const app = express();

const port = 4000;

app.use(cors());

const baseUrl = 'https://poe.ninja/api/data';
app.route('/currencyoverview')
    .get(async (req, res) => {
        try {
            const {league, type} = req.query;
            const url = `${baseUrl}/currencyoverview?league=${league}&type=${type}`;
            const resp = await fetch(url).then(res => res.json());
            res.send(resp);
        } catch (e) {
            console.log(e)
        }
    })

app.route('/itemoverview')
    .get(async (req, res) => {
        try {
            const {league, type} = req.query;
            const url = `${baseUrl}/itemoverview?league=${league}&type=${type}`;
            const resp = await fetch(url).then(res => res.json());
            res.send(resp);
        } catch (e) {
            console.log(e)
        }
    })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

