const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}.then(() => console.log('connexion réussie'))
.catch(() => console.log('connexion échouée'))
