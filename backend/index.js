// Importando os módulos necessários
const express = require('express');
const cors = require('cors');

// Criando a aplicação Express
const app = express();

// Configurando o CORS e JSON
app.use(cors());
app.use(express.json());

// Endpoint de teste
app.get('/api/teste', (req, res) => {
  res.json({ mensagem: 'Backend funcionando corretamente!' });
});

// Endpoint com dados de linguagens de programação
app.get('/api/languages', (req, res) => {
  const languages = [
    { nome: 'JavaScript', popularidade: 95, empresas: ['Google', 'Meta', 'Netflix'] },
    { nome: 'Python', popularidade: 90, empresas: ['Microsoft', 'Spotify', 'Instagram'] },
    { nome: 'Java', popularidade: 85, empresas: ['Amazon', 'Oracle', 'IBM'] },
    { nome: 'C#', popularidade: 75, empresas: ['Unity', 'Microsoft', 'LinkedIn'] },
    { nome: 'C++', popularidade: 70, empresas: ['Adobe', 'NVIDIA', 'Ubisoft'] },
    { nome: 'TypeScript', popularidade: 65, empresas: ['Google', 'Slack', 'Airbnb'] },
  ];

  res.json(languages);
});

// Definindo a porta do servidor
const PORT = 3001;

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
