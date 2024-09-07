// Given the array let products = [{ name: 'Laptop', price: 1500 }, { name: 'Phone', price: 800 }, { name: 'Tablet', price: 1200 }];, write code to filter out the products with a price greater than 1000.

let products = [{ name: 'Laptop', price: 1500 }, { name: 'Phone', price: 800 }, { name: 'Tablet', price: 1200 }];

let max=products[0].price;
for(let i=0; i<products.length;i++){
    if(products[i].price>max){
        max= products[i].price
    }
    
}
console.log(max)