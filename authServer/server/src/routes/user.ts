import { Router } from "express";
import {
  handleFetchWithTempToken,
  handleAuth,
  handleFetchWithParmanentToken,
} from "../controllers/user";

const router: Router = Router();

router.post("/auth", handleAuth);
router.post("/temp-token", handleFetchWithTempToken);
router.post("/fetch", handleFetchWithParmanentToken);

export default router;
