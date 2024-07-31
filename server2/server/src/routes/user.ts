import { Router } from "express";
import { handleGetUser, handleVerfy } from "../controllers/user";

const router: Router = Router();

router.post("/fetch", handleGetUser);
router.post("/verify", handleVerfy);

export default router;
