const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Verifica se existe um header "Authorization"
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  // Formato esperado: "Bearer <token>"
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token inválido' });
  }

  try {
    // Decodifica o token usando a chave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Anexa os dados do usuário (ex.: userId, email) ao objeto req
    req.user = decoded;
    // Prossegue para o próximo middleware ou controller
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido ou expirado' });
  }
};
