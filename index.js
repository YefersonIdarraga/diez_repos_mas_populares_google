const axios = require('axios')
require('dotenv').config()

const github_token = process.env.GITHUB_TOKEN
const base_url = 'https://api.github.com'

axios.get(`${base_url}/users/google/repos?per_page=10&sort=stars`, {
    headers: {
        Athorization: `Bearer ${github_token}`
    }
})
    .then(response => {
        console.log('Los diez repositorios mas populares del usuario "google" son: ')
        response.data.forEach(repo => console.log(repo.name))
    })
        .catch(error => {
            console.log(error)
        })
