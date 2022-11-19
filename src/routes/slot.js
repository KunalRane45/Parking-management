import { Router } from "express";
import createSlots from "../controllers/slots/create.js";
import deleteSlot from "../controllers/slots/delete.js";
import { getSlot, getSlots } from "../controllers/slots/get.js";
import updateSlot from "../controllers/slots/update.js";

const SlotRouter = Router();

SlotRouter.post("/create" ,createSlots);
SlotRouter.get("/getall", getSlots);
SlotRouter.get("/:id", getSlot);
SlotRouter.put("/:id",updateSlot);
SlotRouter.delete("/:id", deleteSlot);
export default SlotRouter;