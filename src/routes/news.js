const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("", async (req, res) => {
  try {
    const { data } = await axios.get(process.env.NEWS_API_URL);
    res.render("news", { articles: data.articles });
    console.log(data);
  } catch (error) {
    res.render("news", { articles: null });
    console.log(error);
  }
});

module.exports = router;
