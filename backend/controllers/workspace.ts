import type { Request, Response } from "express";
import Workspace from "../models/workspace";
import Project from "../models/project";

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
      "members.user": req.user?._id,
    }).sort({ createdAt: -1 });
    console.log(workspaces);
    res.status(200).json(workspaces);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getWorkspaceDetails = async (req: Request, res: Response) => {
  try {
    const { workspaceId } = req.params;
    const workspace = await Workspace.findOne({
      _id: workspaceId,
      "members.user": req.user?._id,
    }).populate("members.user", "name email profilePicture");

    if (!workspace) {
      return res.status(401).json({ message: "Workspace not found" });
    }
    res.status(200).json(workspace);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getWorkspaceProjects = async (req: Request, res: Response) => {
  try {
    const { workspaceId } = req.params;
    const workspace = await Workspace.findOne({
      _id: workspaceId,
      "members.user": req.user?._id,
    }).populate("members.user", "name email profilePicture");

    if (!workspace) {
      return res.status(401).json({ message: "Workspace not found" });
    }
    console.log(workspaceId);
    console.log(req.user?._id);
    const project = await Project.find({
      workspace: workspaceId,
      isArchieved: false,
      "members.user": req.user?._id,
    })
      // .populate("tasks", "status")
      .sort({ createdAt: -1 });
    console.log(project);
    res.status(200).json({ projects: project, workspace });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export {
  createWorkspace,
  getWorkspaces,
  getWorkspaceDetails,
  getWorkspaceProjects,
};
