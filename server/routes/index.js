module.exports = app => {

  // Base URLS
  app.use('/', require('./index.routes'))
  app.use('/api', require('./auth.routes'))
  app.use('/api/apuestas', require('./bets.routes'))

  //DEPLOY
  app.use((req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    });
}
