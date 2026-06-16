[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/chirontelos/quotes-and-news-api/blob/master/README.md)
#### Introdução
API simples para buscar citações de personagens, imagens e notícias sobre anime para alimentar um site.

#### Como usar
Entre no diretório do projeto
```sh
cd /quotes-and-news-api/
```
Execute o app.js localizado na pasta raiz
```sh
node app.js
```
Agora você pode abrir o console do Node no terminal e buscar as rotas:
```sh
fetch('http://localhost:3000/api/quote').then(res => res.json()).then(console.log);
```

#### roteiro do projeto
- retornar também a imagem do personagem
- adicionar a rota de notícias
- usar outras APIs caso as principais não funcionem
- melhorar este README
