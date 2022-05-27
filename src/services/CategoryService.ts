import axios from "axios";
import {Categories} from "../models/entities/League";

const CategoryApi = axios.create({
    baseURL: 'http://localhost:4000'
});


export default class CategoryService {
    static async getPrices(league: string,category: Categories){
        const urlPrefix = category === Categories.Fragment || category === Categories.Currency ? 'currency' : 'item';
        const res = await CategoryApi.get(`/${urlPrefix}overview?league=${league}&type=${category}`);
        return res.data;
    }
}
