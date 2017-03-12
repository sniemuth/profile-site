export class WorkRecord {
  id: number;
  company: string;
  title: string;
  startDate: Date;
  endDate: Date;
  technologies: string[] = [];
  summary: string;
  keyAchieviements: string[] = [];
}