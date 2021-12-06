import { Router } from "express";


const router = Router();

import * as clothesController from "./clothes.controller.js";

router.get("/clothes", clothesController.getClothes);
router.get("/clothes/:id", clothesController.getOneClothes);
router.post("/clothes", clothesController.createClothes);
router.put("/clothes/:id", clothesController.updateClothes);
router.delete("/clothes/:id", clothesController.deleteClothes);

export default router;
