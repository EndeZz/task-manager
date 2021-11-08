import { CardInterface } from "../utils/interface"

export default function apiContent() {
  const url = "http://localhost:3000/contents"
  return {
    async getContent(limit: number, page: number) {
      const request = await fetch(`${url}?_limit=${limit}&_page=${page}`)
        .then(response => response.json())
    },

    async postContent(content: CardInterface) {
      const request = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content)
      })
        .then(response => response.json())
    }
  }
}
