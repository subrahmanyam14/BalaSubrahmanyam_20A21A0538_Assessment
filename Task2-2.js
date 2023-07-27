var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    pass:"mysql@123",
    database:"mydatabase"
});
con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    con.query("Create table employee(id int  auto-increment primary key,name varchar(225),department varcharchar(100),salary float)",function(err,result){
        if(err) throw err;
        console.log("Table created");
    });
})