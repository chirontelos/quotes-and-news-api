#### introduction
simple api to fetching characters quotes and images and news about anime to feed a website.

#### how to use
Enter project directory
```sh
cd /quotes-and-news-api/
```
run the app.js located at root folder
```sh
node app.js
```
now you can open the node console on terminal and fetch the routes like
```sh
fetch('http://localhost:3000/api/quote').then(res => res.json()).then(console.log);
```

#### project roadmap
- return picture of character too
- add the news route 
- uses others APIs in case the primary ones don't work
- improve this README
