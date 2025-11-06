📊 Projeto Linguagens Dashboard

Um dashboard interativo desenvolvido em React.js e Node.js, que exibe a popularidade de linguagens de programação e as empresas que mais utilizam cada uma.
Inspirado no conceito de ferramentas como o Power BI, o projeto combina visualização de dados, design moderno e componentização em um ambiente web responsivo.

Desenvolvido por Lucas Pinheiro (Front-End) e Luiz Guilherme (Back-End).


---

🚀 Tecnologias Utilizadas

Frontend

⚛️ React.js

📈 Recharts (para os gráficos)

🎨 Tailwind CSS (estilo moderno e responsivo)

🌗 Suporte a tema claro/escuro


Backend

🖥️ Node.js + Express

🔗 API REST com endpoint /api/languages

📡 Retorna dados simulados de linguagens e empresas



---

📂 Estrutura do Projeto

projeto-linguagens-dashbroad/
├── client/                # Frontend em React
│   ├── src/
│   │   ├── components/
│   │   │   └── LanguageChart.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
│
├── server/                # Backend em Node/Express
│   ├── index.js
│   └── package.json
│
└── README.md


---

⚙️ Instalação

Clone o repositório e instale as dependências de cada parte do projeto:

# Clonar o projeto
git clone https://github.com/seuusuario/projeto-linguagens-dashbroad.git

# Acessar a pasta do cliente
cd client
npm install

# Acessar a pasta do servidor
cd ../server
npm install


---

▶️ Como Executar o Projeto

Rodar o Backend:

cd server
npm start

O servidor iniciará em http://localhost:3001 e disponibilizará a rota:
GET /api/languages

Rodar o Frontend:

cd client
npm run dev

O app React será aberto em http://localhost:5173


---

📡 Endpoint Principal (Backend)

Rota: GET /api/languages

Exemplo de resposta:

[
  { "language": "JavaScript", "percentual": 1.0, "company": ["Google", "Meta", "Netflix"] },
  { "language": "Python", "percentual": 0.92, "company": ["Microsoft", "Spotify", "Instagram"] },
  { "language": "Java", "percentual": 0.85, "company": ["Amazon", "Oracle", "IBM"] },
  { "language": "C#", "percentual": 0.78, "company": ["Unity", "Microsoft", "LinkedIn"] },
  { "language": "C++", "percentual": 0.70, "company": ["Adobe", "NVIDIA", "Ubisoft"] },
  { "language": "TypeScript", "percentual": 0.65, "company": ["Google", "Slack", "Airbnb"] }
]


---

📊 Componente Principal: LanguageChart.jsx

Este componente é o coração visual do projeto, responsável por exibir o gráfico e as empresas associadas.

✨ Funcionalidades

Suporte a vários tipos de gráfico (bar, line, pie, area, radar)

Cores dinâmicas e adaptáveis ao tema

Tooltip interativa e legível

Exibição das empresas diretamente abaixo do gráfico

Responsividade total


💻 Exemplo de Uso

import LanguageChart from "./components/LanguageChart";

const data = [
  { language: "JavaScript", percentual: 1, company: ["Google", "Meta", "Netflix"] },
  { language: "Python", percentual: 0.92, company: ["Microsoft", "Spotify", "Instagram"] },
];

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <LanguageChart data={data} type="bar" theme="dark" />
    </div>
  );
}


---

🧠 Props Aceitas

Propriedade	Tipo	Descrição

data	Array	Lista com linguagens, percentual e empresas
type	string	Tipo do gráfico (bar, line, pie, area, radar)
theme	string	Define o tema (dark ou light)



---

📦 Dependências

Antes de executar o projeto, certifique-se de instalar:

npm install recharts
npm install react react-dom
npm install express cors


---

🧩 Contribuição

Sinta-se à vontade para enviar PRs, abrir issues ou sugerir melhorias.
Este projeto foi criado com fins educacionais e demonstrativos, ideal para mostrar habilidades em React, Node.js e visualização de dados.


---

👨‍💻 Autores

Lucas Pinheiro — Desenvolvedor Front-End
💡 Responsável pela interface, experiência do usuário e integração com o backend.

Luiz Guilherme — Desenvolvedor Back-End
🧠 Responsável pela criação da API, estrutura do servidor e integração de dados.

📍 Projeto criado para fins de portfólio — unindo visualização de dados e desenvolvimento full stack.
