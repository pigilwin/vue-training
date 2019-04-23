import axios from 'axios';

export default class Countries {

    /**
     * Get all the data
     * @return {Promise<any>}
     */
    static getAll() {
        return new Promise((resolve) => {
            axios('https://restcountries.eu/rest/v2/all').then((response) => {
                let resData = response.data;
                resData = resData.map((obj) => {
                    return {
                        name: obj.name,
                        code: obj.numericCode
                    };
                });
                resolve(resData);
            });
        });
    }
}