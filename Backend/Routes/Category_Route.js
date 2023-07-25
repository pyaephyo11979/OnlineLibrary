const Router = require ("express").Router();
const Category_Controller=require ("../Controller/Category_Controller.js");

Router.get("/",Category_Controller.all);
Router.post("/",Category_Controller.add);

Router.route("/:id")
.get(Category_Controller.get)
.delete(Category_Controller.drop)
.patch(Category_Controller.patch)

module.exports = Router;