import express from "express";
import {
    login,
    register,
    // view
} from "../controllers/reglog.js";

const router = express.Router();

// CREATE
router.post("/signup", register)
// UPDATE
router.post("/login", login)

// router.get("/view",view)

export default router;