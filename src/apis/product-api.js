async function getProducts(urlRequest, token) {
    const data = await fetch(`http://localhost:3001/${urlRequest}`, {
        method: 'GET',
        headers: new Headers(
            { 'Token': token }
        )
    });
    const dataModel = await data.json();
    return dataModel;
}

export default getProducts