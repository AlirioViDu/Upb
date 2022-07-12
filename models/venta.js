const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VentasSchema = new Schema({
    periodo: Number,
    idvendedor:Number,
    idlinea: Number,
    valor: Number,
});

module.exports = mongoose.model('ventas', VentasSchema);

