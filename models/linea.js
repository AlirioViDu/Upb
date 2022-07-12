const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LineaSchema = new Schema({
    codigolinea: Number,
    nombre: String,
    activo: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('linea', LineaSchema);

