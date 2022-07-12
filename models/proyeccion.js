const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProyeccionSchema = new Schema({
    periodo: Number,    
    valor: Number,
});

module.exports = mongoose.model('proyeccion', ProyeccionSchema);

