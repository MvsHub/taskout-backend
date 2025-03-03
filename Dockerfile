# Escolha a versão do Node
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências (package.json e package-lock.json)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código para dentro do contêiner
COPY . .

# Expõe a porta 3000 (caso seja a porta do servidor)
EXPOSE 3000

# Comando para rodar a aplicação
# Para ambiente de produção, podemos usar "npm start"
# Para ambiente de desenvolvimento, podemos usar "npm run dev"
CMD ["npm", "run", "start"]
