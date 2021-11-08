export default function apiUsers() {
  const api = 'http://localhost:3000/users'; //Нет пароля в данном объекте!!!
  return {
    async login(email: string, password: string) {
      try {
        const response = await fetch(`api?email=${email}&password=${password}`)
          .then(response => response.json())
        return response
      }
      catch (error) {
        console.error(error);
      }
    }
  }
}
