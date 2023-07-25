const Router = require ("express").Router();
const Author_Controller=require ("../Controller/Author_Controller.js");

Router.get("/",Author_Controller.all);
Router.post("/",Author_Controller.add);

Router.route("/:id")
.delete(Author_Controller.drop)
.patch(Author_Controller.patch)

module.exports = Router;