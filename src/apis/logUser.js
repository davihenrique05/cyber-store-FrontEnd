async function logar(user, pass) {

  const data = await fetch(`http://localhost:3001/login`, {
    method: 'POST',
    headers: new Headers({
      'Authorization': JSON.stringify({ username: user, password: pass }),
      'Content-Type': 'text/plain'
    }),
  });
  const response = await data.json();
  sessionStorage.setItem('cyber/token', response.token);
  return response.response;
}

export default logar;