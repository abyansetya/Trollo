import React from "react";
import type { Project } from "types";

interface ProjectCardProps {
  project: Project;
  progress: number;
  workspaceId: string;
}

const ProjectCard = ({ project, progress, workspaceId }: ProjectCardProps) => {
  return <div>ProjectCard</div>;
};

export default ProjectCard;
