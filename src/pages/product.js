import {useEffect, useState} from 'react';
import getProducts from "../apis/product-api";
import Products from '../components/products'

function ProductsPage(){
    const [listOfItems, setList] = useState([]);
    const [responded, setResponded] = useState(false);

    useEffect( ()=>{
        const getListOfProducts = async() => {
            const token = sessionStorage.getItem('cyber/token');
            const products = await getProducts("all-products",token);

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