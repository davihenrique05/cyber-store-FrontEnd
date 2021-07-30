async function logar(user, pass){
    const data = await fetch(`http://localhost:3001/login`,{
        method: 'POST',
        headers: {'Content-Type': 'text/plain'},
        body: JSON.stringify({username: user, password: pass})
      });
    const response =  await data.json();
    return response.response;

}

export default logar;