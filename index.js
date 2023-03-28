const express = require("express");
const app = express();
const PORT = 4000;
app.use(express.json())
app.get("/", (req, res) => {
  res.send("home Page");
});
app.get("/api/main", (req, res) => {
  const abc = {
    message:
      "Express is a fast, unopinionated, minimalist web framework for Node.js. It provides robust routing, HTTP utility methods, and middleware for creating scalable web applications.",
  };
  res.send(abc);
});
app.post('/api/main',(req,res)=>{
  // req.body
  // console.log(req)
res.send(req.body);
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
