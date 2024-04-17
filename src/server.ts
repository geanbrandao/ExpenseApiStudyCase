import fastify from "fastify";
import { categoriesRoutes } from "./routes/categories";

const app = fastify();
// Registrar plugin
app.register(categoriesRoutes, {
  prefix: "categories",
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server runnning");
  });
