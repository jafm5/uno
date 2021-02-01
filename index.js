const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;
const cors = require('cors')

app.use(cors({ origin: 'http://localhost:4200' }));
mongoose.connect('mongodb://localhost:27017/eduBIT', { useNewUrlParser: true, useUnifiedTopology: true }, (error, res) => {
    if (error) {
        console.log("Error de conexión", error);
    } else {
        console.log("Nos conectamos correctamente");
        app.listen(port, () => {
            console.log('escuchando en el puerto', port);
        })
    }
})