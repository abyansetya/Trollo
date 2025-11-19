export interface User {
  _id: string;
  email: string;
  name: string;
  createdAt: Date;
  isEmailVerified: boolean;
  updatedAt: Date;
  profilePicture?: string;
}

export interface Workspace {
  _id: string;
  name: string;
  description?: string;
  owner: User | string;
  color: string;
  members: {
    _id: string;
    user: User;
    role: "admin" | "member" | "owner" | "viewer";
    joinedAt: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  _id: string;
  title: string;
  description?: string;
  status: "Planning" | "In Progress" | "On Hold" | "Completed" | "Cancelled";
  workspace: Workspace;
  startDate: Date;
  dueDate: Date;
  progress: number;
  task: Task[];
  members: {
    user: User;
    role: "admin" | "member" | "owner" | "viewer";
  };
  createdAt: Date;
  updatedAt: Date;
  isArchieved: boolean;
}

export interface Subtask {
  _id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export interface Attachment {
  fileName: string;
  fileUrl: string;
  fileType: string;
  fileSize: number;
  uploadedBy: string;
  uploadedAt: Date;
  _id: string;
}

export interface Task {
  _id: string;
  title: string;
  description?: string;
  status: "To Do" | "In Progress" | "Done";
  project: Project;
  createdAt: Date;
  updatedAt: Date;
  isArchieved: boolean;
  dueDate: Date;
  priority: "High" | "Medium" | "Low";
  assignee: User | string;
  createdBy: User | string;
  assignees: User[];
  subtasks?: Subtask[];
  watchers?: User[];
  attachments: Attachment[];
}
