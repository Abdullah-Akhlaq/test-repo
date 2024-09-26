const express = require("express");
const { getContractName } = require("../controllers/fetchContractController");

const router = express.Router();

// Define the route
router.get("/abdullahapitest", getContractName);

module.exports = router;
