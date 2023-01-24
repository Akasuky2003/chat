import axios from "axios";
const URL_BASE = "http://localhost:3030";
const api=axios.create({
    baseURL: URL_BASE,
    headers: {
        "content-type": "application/json"
    }
});
export const get =async(url)=>{
    try{
        const response = await api.get(url);
        return response.data;
    }catch(error){
        console.log(error.message);

    }
};