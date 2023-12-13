import Link from "next/link"

export default function Productlist() {
    const productId =100;
    return<>
    <Link href="/">Home</Link>
        <h1>Product List</h1>
        <h2><Link href="products/1">Produit 1</Link></h2>
        <h2><Link href="products/2">Produit 2</Link> </h2>
        <h2><Link href="products/3" replace>Produit 3</Link></h2>
        <h2><Link href={`products/${productId}`}>Produit {productId}</Link></h2>



    </> 
}