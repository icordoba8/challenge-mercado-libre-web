import axios from "axios";
import {api} from '../../package.json';
const search = async (query:any) => {
    try {
        const response = await axios.get(`${api}items?search=${query}`,{ withCredentials: true });
        return response;
    } catch (err) {
        return {
            data: {
                error: "error",
                message: "Tiempo de respuesta agotado intente nuevamente",
            },
        };
    }
};

const detail = async (id:any) => {
    try {
        const response = await axios.get(`${api}items/${id}`,{ withCredentials: true });
        return response;
    } catch (err) {
        return {
            data: {
                error: "error",
                message: "Tiempo de respuesta agotado intente nuevamente",
            },
        };
    }
};

const ItemsService: any = {
    search,
    detail
};
export {ItemsService }