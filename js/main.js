
const basePrice = document.getElementById('base-price');
const memorySizeCost = document.getElementById('memory-size-cost');
const storageSizeCost = document.getElementById('storage-cost');
const total = document.getElementById('update-total');
const deliveryDayCost = document.getElementById('delivery-cost');


// Memory price set 
function memoryPriceSet(memory , memoryPrice){
    document.getElementById('memory'+memory);
    const memorySizeCost = document.getElementById('memory-size-cost');
    memorySizeCost.innerText  = memoryPrice ;
    
}

document.getElementById('memory16').addEventListener('click', function(){
    memoryPriceSet(16, 180);
    upateTotal()
})

document.getElementById('memory8').addEventListener('click', function(){
    memoryPriceSet(8, 0);
    upateTotal()
})


// Storage price set 

function storagePriceSet(storage , storagePrice){
    
    document.getElementById('storage'+storage);
    const storageSizeCost = document.getElementById('storage-cost');
    
    storageSizeCost.innerText = storagePrice;
       
}

document.getElementById('storage256').addEventListener('click', function(){
    storagePriceSet(256, 0);
    upateTotal()
})
document.getElementById('storage512').addEventListener('click', function(){
    storagePriceSet(512, 100);
    upateTotal()
})

document.getElementById('storage1').addEventListener('click', function(){
    storagePriceSet(1, 180);
    upateTotal();
})

// Delivery Charge Price Set 

function deliveryPriceSet(deliveryTime, deliveryPrice){
    document.getElementById('delivery'+deliveryTime);
    const deliveryDayCost = document.getElementById('delivery-cost');
    deliveryDayCost.innerText= deliveryPrice;
}

document.getElementById('delivery25').addEventListener('click', function(){
    deliveryPriceSet(25, 0);
    upateTotal();
})
document.getElementById('delivery21').addEventListener('click', function(){
    deliveryPriceSet(21, 20);
    upateTotal();
})

// Update Total

function upateTotal(){
    const bestPrice = Number(basePrice.innerText);
    const memoryCost = Number (memorySizeCost.innerText);
    const storageCost = Number (storageSizeCost.innerText);
    const deliveryCost = Number(deliveryDayCost.innerText);
    const grandTotal =  bestPrice + memoryCost + storageCost + deliveryCost;
    total.innerText = grandTotal;
    promoTotal.innerText= total.innerText ;

}

// Apply promo Code 

const promoInput = document.getElementById('promo');
const promoApply = document.getElementById('promo-apply');
const promoTotal  = document.getElementById('promo-total');

promoApply.addEventListener('click', function(){
    
    if(promoInput.value == 'stevekaku'){
        promoTotal.innerText = total.innerText - total.innerText*0.2;
        promoInput.value = '';
    }
    
    
})