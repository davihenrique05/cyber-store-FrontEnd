async function getProducts (urlRequest){
    const data = await fetch(`http://localhost:3001/${urlRequest}`)
    const dataModel = await data.json();
    return dataModel;
}

export default getProducts