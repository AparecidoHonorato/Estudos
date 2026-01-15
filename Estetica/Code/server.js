const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Define a pasta pública (HTML e CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Site da clínica rodando em http://localhost:${PORT}`);
});
