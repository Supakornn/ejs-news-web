const expess = require("express");

const app = express();
const port = 5500;

app.listen(port, () => console.log(`Server is running on port ${port}`));
