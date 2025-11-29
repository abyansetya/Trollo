import BackButton from "@/components/back-button";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

const ProjectDetails = () => {
  const { projectId, workspaceId } = useParams<{
    projectId: string;
    workspaceId: string;
  }>();
  const navigate = useNavigate();

  const [isCreateTask, setIsCreateTask] = useState(false);
  const [taskFilter, saetTaskFilter] = useState("All");

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <BackButton />
          <div className="flex items-center gap-3">
            <h1 className="text-xl md:text-2xl font-bold">Test</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
