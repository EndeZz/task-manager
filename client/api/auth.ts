interface AuthResponce {
  accessToken: string
  refreshToken: string
}

class Auth {
  email: string
  password: string

  constructor(email: string, password: string) {
    this.email = email
    this.password = password
  }

  async api() {
    const responce = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.email,
        password: this.password
      })
    }) as unknown as AuthResponce;

    for (let key in responce) {
      document.cookie = `${key}=${responce[key]}`
    }
  }
}
