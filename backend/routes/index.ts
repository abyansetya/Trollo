import express from "express";

import authRoutes from "./auth.ts";
import WorkspaceRoutes from "./workspace.ts";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/workspaces", WorkspaceRoutes);
export default router;
