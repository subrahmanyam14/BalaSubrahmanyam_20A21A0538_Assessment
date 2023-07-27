var nodemailer=require("nodemailer");
//declARE another variable-create transport
var transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
           user:"d.balasubrahmanyam4@gmail.com",
           pass:"bscnzrazipuafdkx"
        }
    }
);
var mailOption={
    from:"d.balasubrahmanyam4@gmail.com",
    to:"pravin.consensus@gmail.com",
    sub:"sending mail from node js",
    text:"Happy to send a mail by using node.js"
};
transporter.sendMail(mailOption,function(error, info){
    if(error){
        console.log(error);
    }
    else{
          console.log("email is sent"+info.response())
    }
});