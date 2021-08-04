async function getProducts(urlRequest, token) {
    const data = await fetch(`${process.env.REACT_APP_HOST}/${urlRequest}`, {
        method: 'GET',
        headers: new Headers(
            { 'Token': token }
        )
    });
    const dataModel = await data.json();
    return dataModel;
}

export default getProducts