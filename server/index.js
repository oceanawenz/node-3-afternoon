const express = require('express');
const massive = require('massive');
const app = express();
const product_controller = require("./product_controller")


require('dotenv').config();
const { PORT, CONNECTION_STRING } = process.env;
app.use(express.json());
console.log(process.env.CONNECTION_STRING)

massive(CONNECTION_STRING).then(db => {
    console.log('db connected')
    app.set('db', db);
}).catch(err => console.log(err))

app.post("/api/products", product_controller.create);
app.get("/api/products", product_controller.getAll);
app.get("/api/products/:id", product_controller.getOne);
app.put("/api/products/:id", product_controller.update);
app.delete("/api/products/:id", product_controller.delete);


app.listen( 3000, () => {
    console.log(`Server listening on port ${3000}.`);
});