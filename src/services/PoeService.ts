import Api from "./Api";

export default class PoeService {
    static async getInfo(){
        return await Api.get('/leagues?type=main&compact=1');
    }
}
