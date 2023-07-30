const router = require ("express").Router();
const Book_Controller = require ("../Controller/Book_Controller.js");
const {saveSingleFile}=require ("../Utils/gallery.js");

router.post("/",[saveSingleFile,Book_Controller.add]);
router.get("/",Book_Controller.all);

router.route("/:id")
.get(Book_Controller.get)
.delete(Book_Controller.drop)
.patch(Book_Controller.patch)

module.exports = router;