let saveSingleFile = async (req,res,next)=>{
    if(req.files){
        let name = req.files.image.name;
        console.log(name)
    }else{
        new Error(next("Need Image File"))
    }
    
}

module.exports = {saveSingleFile}