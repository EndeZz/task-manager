import { UserInterface } from "../utils/interface";

export default function apiUsers() {
  const url = 'http://localhost:3000/users';
  return {
    async getUsers() {
      try {
        const response = await fetch(url)
          .then(response => response.json())
        return response
      }
      catch (error) {
        console.error(error);
      }
    },

    async getUser(props: string) {
      const response = await fetch(url + props)
        .then(response => response.json())
      return response
    },


    async postUsers(user: UserInterface) {
      const request = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
        .then(request => {
          if (request.status !== 200) {
            return Promise.reject(new Error(request.statusText))
          }
          return Promise.resolve(request)
        })
        .then(responce => responce.json())
      return request
    },

    async putUsers(user: UserInterface) {
      const id = user.id
      const request = await fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(request => {
          if (request.status !== 200) {
            return Promise.reject(new Error(request.statusText))
          }
          return Promise.resolve(request)
        })
        .then(responce => responce.json())
      return request
    },
    async deleteUsers(id: number) {
      const request = await fetch(`${url}/${id}`, {
        method: 'DELETE'
      })
        .then(request => {
          if (request.status !== 200) {
            return Promise.reject(new Error(request.statusText))
          }
          return Promise.resolve(request)
        })
        .then(responce => responce.json())
      return request
    }
  }
}
