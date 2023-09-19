import express, { Router } from 'express'

const app = express()
const router = Router()

// Configurando o Express
app.use(express.json()) // Configurando para receber JSON
app.use(router)

type Pessoa = {
  nome: string
  email: string
}
const listPessoas: Pessoa [] = []

router.get('/', (request, response) =>
  response.json({ ola: 'Ola mundo', nome: 'Clara' }))

router.post('/formulario', (request, response) => {
  listPessoas.push({ nome: request.body.nome, email: request.body.email })
  return response.json().status(201).json({})
})
router.get('/carregar', (request, response) => {
  listPessoas.push({ nome: 'Lucas Ribeiro', email: 'lucasribeiro@gmail.com' })
  listPessoas.push({ nome: 'Camilo de Sousa', email: 'camilosousa@gmail.com' })
  listPessoas.push({ nome: 'Maria Clara', email: 'mariaclara@gmail.com' })

  return response.json({ list: listPessoas })
})

app.listen(3000, () => { console.log('Running port 3000') })
