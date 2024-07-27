import { Router } from "express";
import { handleGetUser } from "../controllers/user";

const router: Router = Router();

router.post("/fetch", handleGetUser);

export default router;
