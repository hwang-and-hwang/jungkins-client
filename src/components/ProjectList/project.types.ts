export type Project = {
  id: number;
  ownerId: number;
  name: string;
  status: 'active' | 'inactive';
  repoUrl: string;
  lastDeploy: Date;
};
