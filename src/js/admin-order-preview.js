'use strict';
import Swal from 'sweetalert2'
//*Essential imports
import { getListOfFirestoreDocs, searchFiretoreDocsBySpecificField, showNotification, updateFirestoreDocument} from "./firebase-modules.js"
import {getParamFromUrl} from "./utility-modules.js";
import { removeCertainClassedElemsFromDom } from "./client_side-modules.js";

//*Variables
const orderId = getParamFromUrl("id");
const fetchedOrderDetails = await searchFiretoreDocsBySpecificField("orders","orderCode",orderId);
const orderDetails = fetchedOrderDetails[0].data;
const allInfoFields = [...document.querySelectorAll('[data-fieldName]')];
const orderStatusELem = document.getElementById('orderStatusIndicator');
const productCon = document.getElementById('product-con'); 

//*Functions
(()=>{
  loadCustomerInfo()
  loadOrderedProducts()
})()

//Retreiving and laoding customer info
function loadCustomerInfo (){
  orderStatusELem.classList.add(orderDetails.status)
  allInfoFields.forEach(field =>{
      const fieldName = field.dataset.fieldname;
      field.innerHTML = orderDetails[fieldName]
      field.classList.remove("skeleton-loading")
  });
}

//Retreiving and laoding products
async function loadOrderedProducts(){
  const productIds = orderDetails.products.map(product => Object.keys(product)[0]);
  const productQuantities = orderDetails.products.map(product => Object.values(product)[0]);
  if(!productIds || !productIds.length) showNotification("error","Something went wrong while getting products")
  
  let quantityIndex = 0;
  const fetchedProducts = await getListOfFirestoreDocs("Products",productIds);
  removeCertainClassedElemsFromDom(productCon, "skeleton-loading")
  fetchedProducts.forEach(product =>{
    addProductToDom(product.data, product.id, productQuantities[quantityIndex]);
    quantityIndex++
  })
}

//structure for a product 
function addProductToDom (productData, productId, productQuantity){
    productCon.innerHTML += `<div class="product ">
    <div class="product-data">
      <img
        src="${productData.primary_img}"
        alt="${productData.title}"
        class="skeleton-loading"
      />
      <a href="../../product?id=${productId}" role="not-link" class="product-title-link">
        <h1>${productData.title}</h1>
      </a>

    </div>
    <div class="product-price">
      <p class="quantity">${productQuantity}x</p>
      <p class="price">Rs.${productData.price}</p>
    </div>
  </div>`
}

//updateing the orderStatus and syncing it with db
function updateOrderStatus(currentStatus){
  orderStatusELem.innerHTML=currentStatus
  orderStatusELem.classList.add(currentStatus)
  updateFirestoreDocument("orders",fetchedOrderDetails[0].id,{status: currentStatus})
  console.log({status: currentStatus})
}

//*Event listners
orderStatusELem.addEventListener("click",(e)=>{
  e.preventDefault();
  Swal.fire({
    title: "Update the order status",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "FullFill",
    denyButtonText: `Pending`,
    cancelButtonText: "Cancel",
    cancelButtonColor: "#a22c29",
    confirmButtonColor: "#027155",
    denyButtonColor: "#b69121",
    allowOutsideClick: false,
    allowEscapeKey: false,
    
  }).then((result) => {
    orderStatusELem.classList.remove("fullfilled","pending","cancelled");
    if (result.isConfirmed) {
      updateOrderStatus("fullfilled")
    } else if (result.isDenied) {
      updateOrderStatus("pending")
    } else if(result.isDismissed){
      updateOrderStatus("cancelled")
    }
  });
})