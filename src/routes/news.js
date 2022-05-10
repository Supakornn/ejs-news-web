const express = require("express");
const router = express.Router();
const axios = require("axios");
const { v4 } = require("uuid");

router.get("", async (req, res) => {
  try {
    const { data } = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=63c1ed853d4c4142afe1195e9ff48276");
    const news = data.articles.map((article) => {
      return { id: v4(), ...article };
    });
    res.render("news", { articles: news });
    console.log(news);
  } catch (error) {
    res.render("news", { articles: null });
    console.log(error);
  }
});

module.exports = router;
