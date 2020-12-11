const express = require("express");
const router = express.Router();

const ShoeModel = require("../models").Shoe;
const UserModel = require("../models").User;

// GET ALL Shoes
router.get("/", async (req, res) => {
    let allShoes = await ShoeModel.findAll();
    res.json({ allShoes });
  });

// GET Shoe
router.get("/:id", async (req, res) => {
    let shoe = await ShoeModel.findByPk(req.params.id);
    res.json({ shoe });
  });

// CREATE A NEW Shoe
router.post("/", async (req, res) => {
    let shoe = await ShoeModel.create(req.body);
    res.json({ shoe });
  });

// UPDATE A Shoe
router.put("/:id", async (req, res) => {
    let shoe = await ShoeModel.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    res.json({ shoe });
  });

// DELETE A Shoe
router.delete("/:id", async (req, res) => {
    await ShoeModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: `Shoe with id ${req.params.id} was deleted`,
    });
  });

module.exports = router;
