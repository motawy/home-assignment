db.createCollection('instants');
db.instants.createIndex({ _id: 'text' });
db.createCollection('test');
db.instants.createIndex({ _id: 'text' });
