# Imagem base
FROM node:latest

# Configuração do usuário/permissões
WORKDIR /user/app/

# Instalação das dependências
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

# Copia dos arquivos do projeto
COPY . ./

#Expondo a porta do servidor
EXPOSE 3000 

# Execução
CMD ["yarn", "start"]