interface Product {
    id: number;
    name: string;
    price: number;
    category: string
}

type ProductSummary = Pick<Product, "name" | "price">

function getProductSummary(productSummary: ProductSummary) {
return `Product: <${productSummary.name}>, Price: <${productSummary.price}>`
}

const datas = getProductSummary({name:"New", price:120})

console.log(datas)