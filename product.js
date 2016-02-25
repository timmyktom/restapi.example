//npm install tingodb
var Db = require('tingodb')().Db,
    assert = require('assert');

var db = new Db('database', {});

//npm install flow
var flow = require("flow");

var category = require('./category');

// product collection 
var productCollection = db.collection("product");



//insertProduct({productname:'product 2', categoryid: 3});
//updateProduct({productid : 4, productname: "product 3", categoryid: 4});
//removeProduct(5);
/*getAllProduct(function(err,data) {
	if(err) {
		console.log("errror " , err);
		return;
	}
	console.log(data);
});*/
/*getProduct(2,function(err,data) {
	if(err) {
		console.log("errror " , err);
		return;
	}
	console.log(data);
});*/

module.exports = 
{
	insertProduct : function(productObj,callback) {
	   productCollection.insert(productObj,
		  function(err, results) {
			if(callback)
				callback(err,results);
	   });
	},
	updateProduct : function(productObj,callback) {
	   productCollection.update(
		  { "_id" : productObj.productid },
		  { $set: { productname: productObj.productname, 
					categoryid: productObj.categoryid} },
		  function(err, results) {
			if(callback)
				callback(err,results);
	   });
	},
	removeProduct : function(productid,callback) {
	   productCollection.remove(
		  { "_id" : productid },
		  function(err, results) {
			if(callback)
				callback(err,results);
	   });
	},
	getAllProduct : function(callback){
		productCollection.find().toArray(function(err, docs) {
			var productCount = docs.length;
			var returnList = new Array;
			flow.serialForEach(docs, function(doc) {
				var serialController = this;
				category.getCategory(doc.categoryid, function(err, data){
						doc.categoryname = data.categoryname;
						returnList.push(doc);
						serialController();
				});
			},
			function () {
				//for each item
			},
			function () {
				//Final
					if(callback)
						callback(null,returnList);
			});
		});
	},
	getProduct : function(productid,callback){
		productCollection.findOne({_id : productid }, function(err, doc) {
			category.getCategory(doc.categoryid,function(err,dataCategory) {
				doc.categoryname = dataCategory.categoryname;
				if(callback)
					callback(null,doc);
			});
		});
	}
}
