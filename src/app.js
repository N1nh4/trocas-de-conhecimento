import express from 'express';

// import pessoaRoutes from './modules/pessoas/pessoa.routes.js';
// import conhecimentoRoutes from './modules/conhecimentos/conhecimento.routes.js';

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    return res.json({ status: 'API Banco de Trocas funcionando' });
});

// app.use('/pessoas', pessoaRoutes);
// app.use('/conhecimentos', conhecimentoRoutes)

export default app;
