var mongoClient = require('mongodb').MongoClient;
mongoClient.connect("mongodb://localhost:27017/app",
  function(err,conn){
      if (err) return console.log(err);
      global.db = conn;
  })

function saveCustomer(nome, idade, callback){
//  console.log(global.db.collection('customers').find());
  console.log("testee");
  console.log(nome, idade);
  global.db.collection("customers").insert({nome, idade}, function(err, result){
    if(err) return console.log(err);
    callback();
  })
}

function findCustomers(callback){
  global.db.collection("customers").find().toArray(function(err, docs){
    if(err) return console.log(err);
    callback(docs);
  })
}


module.exports = {saveCustomer, findCustomers}
