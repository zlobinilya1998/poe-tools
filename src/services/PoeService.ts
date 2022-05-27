import Api from "./Api";

export default class PoeService {
    static async getLeagues() {
        const res = await Api.get('/leagues?type=main&compact=1');
        return res.data;
    }
}
