/* Update, Delete and Drop in MongoDB
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/- */


db
use lessondb

// Show how to update data 
// using db.[COLLECTION_NAME].update()
db.iWantToGoToThere.update({"country": "Morocco"}, {$set: {"continent":"Antartica"}})
// Note that the above will only update the first entry it matches. 

// To update multiple entries, you need to add {multi:true}
db.iWantToGoToThere.update({"country": "Morocco"}, {$set: {"continent":"Antartica"}}, {multi:true})


db.iWantToGoToThere.update({"country": "Morocco"}, {$set: {"capital":"Rabat"}})
// answer: it will create the field

// And show the field can now be updated with the same command
db.iWantToGoToThere.update({"country": "Morocco"}, {$set: {"capital":"RABAT"}})

// Show how to push to an array with $push
db.iWantToGoToThere.update({"country": "Morocco"}, {$push: {"majorcities":"Agadir"}})

// Show how to delete an entry with db.[COLLECTION_NAME].remove()
db.iWantToGoToThere.remove({"country":"Morocco"})

// Show how to empty a collection with db.[COLLECTION_NAME].remove()
db.iWantToGoToThere.remove({})

// Show how to drop a collection with db.[COLLECTION_NAME].drop()
db.iWantToGoToThere.drop()

// Show how to drop a database 
db.dropDatabase()