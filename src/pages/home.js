import { useEffect, useState, useMemo } from 'react';
import getProducts from "../apis/product-api";
import Products from '../components/products';
import Banner from '../components/banner';

function Home() {

  const [listOfItems, setList] = useState([]);
  const [responded, setResponded] = useState(false);

  useEffect(() => {
    const getListOfProducts = async () => {
      const token = sessionStorage.getItem('cyber/token');
      const products = await getProducts("new-products", token)

      setList(products);
      setResponded(true);
    }

    getListOfProducts();
  }, []);

  const ProductsList = useMemo(() => <Products list={listOfItems} />, [listOfItems]);
  return (
    <>
      <Banner />
      {responded && ProductsList}
    </>
  )
}

export default Home;