var Promise = require('bluebird');
var mongoClient = Promise.promisifyAll(require('mongodb')).MongoClient;

mongoClient.connectAsync('mongodb://localhost:27017/tennis')
    .then(function(db) {
        return db.collection('content').findAsync({})
    })
    .then(function(cursor) {
        return cursor.toArrayAsync();
    })
    .then(function(content) {
        res.status(200).json(content);
    })
    .catch(function(err) {
        throw err;
    });
