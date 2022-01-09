interface Info {
  id: number;
  name: string;
}

interface InfoType {
  id: number;
  name: "video" | "audio" | "photo";
}

interface InfoStatus {
  id: number;
  name: 'inWork' | 'feedback' | 'approved';
}

export interface UserInterface {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: Info;
}

export interface CardInterface {
  id: number;
  type: Info
  name: string;
  dateCreated: string;
  author: Info
  format: string /*format*/;
  url: string;
  preview: string
}

export interface TasksInterface {
  id: number;
  name: string;
  type: Info
  executor: Info
  dateExpired: string;
  status: Info;
}

export interface TaskFullInterface {
  id?: number;
  name: string;
  type: Info
  description: string;
  files: {
    id: number;
    name: string;
    dateCreated: string;
    format: string;
    url: string;
  }[];
  author: UserInterface;
  executor: UserInterface;
  dateCreated: string;
  dateExpired: string;
  contents: CardInterface[];
  comments: {
    id: number;
    date: string;
    user: Info;
    message: string;
  }[];
  status: Info;
}

export interface ArrayFile {
  name?: string;
  preview?: string;
  format?: string
}
