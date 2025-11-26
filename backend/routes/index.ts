import express from "express";

import authRoutes from "./auth.ts";
import WorkspaceRoutes from "./workspace.ts";
import projectRoutes from "./project.ts";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/workspaces", WorkspaceRoutes);
router.use("/projects", projectRoutes);

export default router;
