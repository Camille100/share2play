const mongoose = require('mongoose');

module.exports = () => {
    mongoose
        .connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Connexion réussie'))
        .catch(() => console.log('Connexion échoué'));
};
