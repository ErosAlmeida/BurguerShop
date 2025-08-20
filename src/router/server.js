const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Caminho para o arquivo db.json
const dbPath = path.join(__dirname, 'db', 'db.json');

// Função para ler o arquivo JSON
function readDB() {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler o arquivo db.json:', error);
    return { ingredientes: { paes: [], carnes: [], opcionais: [] }, burgers: [] };
  }
}

// Função para escrever no arquivo JSON
function writeDB(data) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Erro ao escrever no arquivo db.json:', error);
    return false;
  }
}

// Rota para pegar ingredientes
app.get('/ingredientes', (req, res) => {
  console.log('✅ Alguém pediu os ingredientes!');
  const db = readDB();
  res.json(db.ingredientes);
});

// Rota para receber pedidos
app.post('/burgers', (req, res) => {
  console.log('📦 Novo pedido recebido:', req.body);
  
  const db = readDB();
  const newBurger = {
    id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    ...req.body,
    status: "Solicitado"
  };
  
  db.burgers.push(newBurger);
  
  if (writeDB(db)) {
    res.json({ 
      success: true, 
      message: 'Pedido recebido com sucesso!',
      pedido: newBurger
    });
  } else {
    res.status(500).json({ 
      success: false, 
      message: 'Erro ao salvar pedido' 
    });
  }
});

// Rota para listar todos os burgers
app.get('/burgers', (req, res) => {
  const db = readDB();
  res.json(db.burgers);
});

// Rota de saúde do servidor
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running!', port: PORT });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📋 Ingredientes disponíveis em: http://localhost:${PORT}/ingredientes`);
  console.log(`🍔 Burgers cadastrados: http://localhost:${PORT}/burgers`);
});