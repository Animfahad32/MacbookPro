// const memory8 = document.getElementById('memory8');
// const memory16 = document.getElementById('memory16');

// const memorySizeCost = document.getElementById('memory-size-cost')

// memory8.addEventListener('click', function(){
//     memorySizeCost.innerText = '180';
// })

// memory16.addEventListener('click', function(){
//     memorySizeCost.innerText = '500';
// })







// Memory price set 
function memoryPriceSet(memory , memoryPrice){
    document.getElementById('memory'+memory);
    const memorySizeCost = document.getElementById('memory-size-cost');
    memorySizeCost.innerText  = memoryPrice ;
   
   
    
    
}

document.getElementById('memory16').addEventListener('click', function(){
    memoryPriceSet(16, 180);
})

document.getElementById('memory8').addEventListener('click', function(){
    memoryPriceSet(8, 0);
})


// Storage price set 



function storagePriceSet(storage , storagePrice){
    
    document.getElementById('storage'+storage);
    const storageSizeCost = document.getElementById('storage-cost');
    
    storageSizeCost.innerText = storagePrice;
    
        
}

document.getElementById('storage256').addEventListener('click', function(){
    storagePriceSet(256, 0);
})
document.getElementById('storage512').addEventListener('click', function(){
    storagePriceSet(512, 100);
})

document.getElementById('storage1').addEventListener('click', function(){
    storagePriceSet(1, 180);
})

// Delivery Charge Price Set 

function deliveryPriceSet(deliveryTime, deliveryPrice){
    document.getElementById('delivery'+deliveryTime);
    const deliveryDayCost = document.getElementById('delivery-cost');
    deliveryDayCost.innerText= deliveryPrice;
}

document.getElementById('delivery25').addEventListener('click', function(){
    deliveryPriceSet(25, 0)
})
document.getElementById('delivery21').addEventListener('click', function(){
    deliveryPriceSet(21, 20)
})