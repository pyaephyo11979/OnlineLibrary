let FMSG = (res,msg,result=[])=>{
  let msg_obj = new Object();
  msg_obj["Message"] = msg;
  msg_obj["Result"] = result;

 res.status(200).send(JSON.stringify(msg_obj));
};

module.exports = {FMSG}