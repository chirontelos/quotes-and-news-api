const express = require("express");
const router = express.Router();

const quoteController = require('../controllers/quoteController');
// const newsController = require('../controllers/newsController');

router.get('/quote', quoteController.getQuote);
// router.get('/news', newsController.getNews);

//probably will have to add authentication in order to avoid people calling the below actions if discovering this routes.
router.delete('/quote/', quoteController.deleteQuote);
// router.delete('/quote/:id', quoteController.deleteQuote);
// router.delete('/news/:id', newsController.deleteNews);

module.exports = router;
