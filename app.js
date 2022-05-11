const express = require("express");

const app = express();
const port = 5500;

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

app.set("views", "./src/views");
app.set("view engine", "ejs");

// app.use(bodyParser.urlencoded({ extended: true }));

const mainRouter = require("./src/routes/news");
app.use("/", mainRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
