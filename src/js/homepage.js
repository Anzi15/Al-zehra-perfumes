'use strict';
import {getFewFirestoreDocs, showAlert, showNotification} from './admin-modules';
import {addProductToDom, removeCertainClassedElemsFromDom} from './client_side-modules';

//getting elems from dom
const topProductsCon = document.getElementById('top-products-con');


(async () => {
    if(window.navigator.onLine){
        //TODO: make a seprate collection in firebase's firestore for everything, top products, product from 1-25, 25-50 and so on everything should be seprated in the DB
        const allProducts = await getFewFirestoreDocs("Products",4);
        
        if(allProducts.length){
            removeCertainClassedElemsFromDom(topProductsCon,"placeolder-products")
            for (const product of allProducts) {
                addProductToDom(topProductsCon, product.data);
            }
        }else{
             showNotification("error","You're having internet issues","Check your internet connection and retry");
        }
    }else{
        const alerReponse = await showAlert("error","You seem offline","Check your internet connection and retry","Retry");
        if(alerReponse.isConfirmed) {window.location.reload()}
    }

})();
