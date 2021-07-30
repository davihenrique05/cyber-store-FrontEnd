async function getProducts (urlRequest, token){
    const data = await fetch(`http://localhost:3001/${urlRequest}?token=${token}`)
    const dataModel = await data.json();
    return dataModel;
}

export default getProducts