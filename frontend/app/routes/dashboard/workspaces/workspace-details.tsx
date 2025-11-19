import WorkspaceHeader from "@/components/workspace/workspace-header";
import { useGetWorkSpaceQuery } from "@/hooks/use-workspace";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { useParams } from "react-router";
import type { Project, Workspace } from "types";

const WorkspaceDetails = () => {
  const { workspaceId } = useParams<{ workspaceId: string }>();
  const [isCreateProject, setIsCreateProject] = useState(false);
  const [isInviteMember, setIsInviterMember] = useState(false);

  if (!workspaceId) {
    return <div>No workspace found</div>;
  }

  const { data, isLoading } = useGetWorkSpaceQuery(workspaceId) as {
    data: {
      workspace: Workspace;
      projects: Project[];
    };
    isLoading: boolean;
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <WorkspaceHeader
        workspace={data.workspace}
        members={data?.workspace?.members}
        onCreateProject={() => setIsCreateProject(true)}
      />
    </div>
  );
};

export default WorkspaceDetails;
