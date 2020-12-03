const mongoose = require('mongoose')

mongoose
    .connect(process.env.DB_REMOTE, { useNewUrlParser: true, useUnifiedTopology: true }) //CONECTAR EN REMOTO
    //.connect(`mongodb://localhost/${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true }) //CONECTAR EN LOCAL
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

module.exports = mongoose