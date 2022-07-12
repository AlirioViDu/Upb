const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VendedorSchema = new Schema({
    idvendedor: Number,
    nombre: String,
    mobile: String,
    clave: String,    
    activo: {
        type: Boolean,
        default: true
    },
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('vendedor', VendedorSchema);

