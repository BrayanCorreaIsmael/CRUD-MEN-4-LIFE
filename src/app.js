import express from "express";
import indexRoutes from "./routes/index.routes";
import { engine } from "express-handlebars";
import path from "path";

const app = express();

let exphbs = require("express-handlebars");

app.set("views", path.join(__dirname, "views")); //aca tiene una ruta absoluta donde se selecciona la ubi actual

app.engine(
  ".hbs",
  exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    extname: ".hbs",
  })
); //aca estamos usando a express hbs sirve para convertir los htmls a hbs

app.set("view engine", ".hbs");

app.use(indexRoutes);

export default app;
