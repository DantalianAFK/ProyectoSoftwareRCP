import httpClient from "./httpClient";

const END_POINT = "/api/products";

const Plista = () => httpClient.get(END_POINT);



const createproduct = (product) => httpClient.post(END_POINT, product);


const updateproduct = (code, product) => httpClient.put(END_POINT + "/" + code, product);


const deleteproduct = (code) => httpClient.delete(END_POINT + "/" + code);

export {
    Plista,    
    createproduct,    
    updateproduct,    
    deleteproduct
}