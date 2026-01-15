const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Pasta pública (site)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Servidor
app.listen(PORT, () => {
    console.log(`Site da clínica rodando em http://localhost:${PORT}`);
});
