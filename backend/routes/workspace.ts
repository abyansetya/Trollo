import express from "express";
import { validateRequest } from "zod-express-middleware";
import { workspaceSchema } from "../libs/validate-schema.ts";
import authMiddleware from "../middleware/auth-middleware.ts";
import { createWorkspace, getWorkspaces } from "../controllers/workspace.ts";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  validateRequest({ body: workspaceSchema }),
  createWorkspace
);

router.get("/", authMiddleware, getWorkspaces);

export default router;
