import type { Request, Response } from "express";
import Workspace from "../models/workspace";

const createWorkspace = async (req: Request, res: Response) => {
  try {
    const { name, description, color } = req.body;

    const workspace = await Workspace.create({
      name,
      description,
      color,
      owner: req.user!._id,
      members: [
        {
          user: req.user!._id,
          role: "owner",
          joinedAt: new Date(),
        },
      ],
    });
    return res.status(201).json({
      workspace,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getWorkspaces = async (req: Request, res: Response) => {
  try {
    console.log("here");
    const workspaces = await Workspace.find({
      "members.user": req.user!._id,
    }).sort({ createdAt: -1 });
    console.log(workspaces);
    res.status(200).json(workspaces);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export { createWorkspace, getWorkspaces };
