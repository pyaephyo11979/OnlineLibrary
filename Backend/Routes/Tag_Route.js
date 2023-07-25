const Router = require ("express").Router();
const Tag_Controller=require ("../Controller/Tag_Controller.js");

Router.get("/",Tag_Controller.all);
Router.post("/",Tag_Controller.add);

Router.route("/:id")
.get(Tag_Controller.get)
.delete(Tag_Controller.drop)
.patch(Tag_Controller.patch)

module.exports = Router;