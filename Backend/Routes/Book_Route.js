const router = require ("express").Router();
const Book_Controller = require ("../Controller/Book_Controller.js");
const {saveSingleFile}=require ("../Utils/gallery.js")
router.post("/",[saveSingleFile,Book_Controller.add])

module.exports = router;