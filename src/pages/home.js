import { useEffect,useState } from 'react';
import getProducts from "../apis/product-api";
import Products from '../components/products';
import Banner from '../components/banner';

function Home() {
  
  const [listOfItems, setList] = useState([]);
  const [responded, setResponded] = useState(false);

  useEffect( ()=>{
    const getListOfProducts = async() => {
        const products = await getProducts("new-products")

        setList(products);
        setResponded(true);
    }

    getListOfProducts();
  },[]);

  return (
    <>
      <Banner/>
      {responded && <Products list={listOfItems}/>}
    </>
  )
}

export default Home;
