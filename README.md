[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/chirontelos/quotes-and-news-api/blob/master/README.pt-br.md)
#### introduction
simple api to fetching characters quotes and images and news about anime to feed a website.

#### how to use
Enter project directory
```sh
cd /quotes-and-news-api/
```
Run the app.js located at root folder
```sh
node app.js
```
Now you can open the node console on terminal and fetch the routes:
```sh
fetch('http://localhost:3000/api/quote').then(res => res.json()).then(console.log);
```

#### project roadmap
- return picture of character too
- add the news route 
- uses others APIs in case the primary ones don't work
- improve this README
