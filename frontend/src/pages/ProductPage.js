import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchProduct } from "../lib/sanity/productServices"

export default function ProductPage() {
    
    //Bruker useParams for å hente parameter fra URL (produkt-slug)
    const {slug} = useParams()

    //Gjøre klar en state for å lagre returnert data fra Sanity
    const [product, setProduct] = useState(null)

    //Løse opp promise, og få ut data fra Sanity
    const getProduct = async () => {
        const data = await fetchProduct(slug)
        setProduct(data[0])
    }

    //Kjøre getProduct når komponent lastes
    useEffect(() => {
        getProduct(slug)
    },[slug])

    //sjekke om det funker
    console.log(product)

    return (
        <>
            <h1>{product?.product_title}</h1>
            <img style={{maxWidth: "400px"}} alt={`Produktbilde av ${product?.product_title}`} src={product?.imageURL} />
            <p>Kategori: {product?.catname}</p>
            <p>Pris i kr: {product?.product_price},-</p>
        </>
    )
}