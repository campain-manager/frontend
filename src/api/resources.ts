


import {
    getProducts,
    getCampaigns,
    getProduct,
    deleteProduct,
    getCampaign,
    deleteCampaign,
    getUser,
    getKeywords
} from "./generated";



export const resources = { 
    products: {
        list: getProducts,
        getOne: getProduct,
        deleteOne: deleteProduct
    }, campaigns: {
        list: getCampaigns,
        getOne: getCampaign,
        deleteOne: deleteCampaign
    }, users: {
        list: getUser
    }, keywords: {
        list: getKeywords
    }
};

