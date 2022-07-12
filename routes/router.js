const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Linea = require('../models/linea');
const Venta = require('../models/venta');
const Proye = require('../models/proyeccion');

router.get("/", async (req, res) => {
  /* const tasks = await Task.find(); */
  res.render("home");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/lineas", async (req, res) => {
  const linea = await Linea.find();
  res.render('lineas', { lineas: linea });
});

router.get("/linea_cambiar/:id", async (req, res) => {
  const { id } = req.params;
  const linea = await Linea.findById(id);
  linea.activo = !linea.activo;
  await linea.save();
  res.redirect('/lineas');
});

router.get("/linea_Editar/:id", async (req, res) => {
    const linea = await Linea.findById(req.params.id);
    res.render('linea_Editar', { lineas: linea });
});

router.post("/linea_Editar/:id", async (req, res) => {
  const { id } = req.params
  await Linea.updateOne({ _id: id }, req.body)
  res.redirect("/Lineas")
})

router.get("/proyeccion", async (req, res) => {
  const proye = await Proye.find();
  res.render('proyeccion', { proyeccion: proye });
});

router.get("/ventas", async (req, res) => {
  const venta = await Venta.find();
  res.render('ventas', { ventas: venta });
});

module.exports = router;