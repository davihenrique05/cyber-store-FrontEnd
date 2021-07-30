import {useEffect, useState} from 'react';
import getProducts from "../apis/product-api";
import Products from '../components/products'

function ProductsPage(){
    const [listOfItems, setList] = useState([]);
    const [responded, setResponded] = useState(false);

    useEffect( ()=>{
        const getListOfProducts = async() => {
            const products = await getProducts("all-products");

            setList(products);
            setResponded(true);
        }

        getListOfProducts();
    },[]);

    return(
        <>
            {responded && <Products list={listOfItems}/>}
        </>
    )
}

export default ProductsPage;