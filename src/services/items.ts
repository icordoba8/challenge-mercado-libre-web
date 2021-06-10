import axios from "axios";
import {api} from '../../package.json';

const search = async (query:any) => {
    try {
      console.log(`${api}items?search=${query}`)
        const response = await axios.get(`${api}items?search=${query}`);
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

const create = async (object:any) => {
  try {
        const response = await axios.post(`${api}campaigns/create`, object);
        return response;
    } catch (err) {
        console.log("Error server");
        return {
            data: {
                error: "error",
                message: "Tiempo de respuesta agotado intente nuevamente",
            },
        };
    }
};
const edit = async (object:any) => {
  try {
        const response = await axios.put(`${api}campaigns/edit`, object);
        return response;
    } catch (err) {
        console.log("Error server");
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
    create,
    edit
};
export {ItemsService };