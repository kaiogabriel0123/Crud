import express from "express";
import { getUsers } from "../controllers/user.js";

const router = express.Router(); // indicando a rota

router.get("/", getUsers); //ATRIBUINDO O METODO GET PARA A VARIAVEL ROUTER  USANDO A FUNÇÃO GETUSERS

export default router;