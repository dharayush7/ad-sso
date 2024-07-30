import { Router } from "express";
import {
  handleFetchWithTempToken,
  handleAuth,
  handleFetchWithParmanentToken,
  handleInvalid,
} from "../controllers/user";

const router: Router = Router();

router.post("/auth", handleAuth);
router.post("/temp-token", handleFetchWithTempToken);
router.post("/fetch", handleFetchWithParmanentToken);
router.post("/invalid", handleInvalid);

export default router;
