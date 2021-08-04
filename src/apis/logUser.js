module.exports = {
  logar: async function (user, pass) {
    const data = await fetch(`${process.env.REACT_APP_HOST}/login`, {
      method: 'POST',
      headers: new Headers({
        'Authorization': JSON.stringify({ username: user, password: pass }),
        'Content-Type': 'text/plain'
      }),
    });
    const response = await data.json();
    sessionStorage.setItem('cyber/token', response.token);
    return response.response;
  },
  validateToken: async function (token) {
    const data = await fetch(`${process.env.REACT_APP_HOST}validateToken`, {
      method: 'POST',
      headers: new Headers(
        { 'Token': token }
      )
    });
    const response = await data.json();
    return response.response;
  }
};
