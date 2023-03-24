import ProductCard from "../components/ProductCard";

export default function Frontpage({products}){
    return(
        <>
        <h1>Innhold fra sanity</h1>
        {products?.map((p, i) => <ProductCard key={i} productinfo={p} />)}
      </>
    )
}