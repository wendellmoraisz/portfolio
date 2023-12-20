export default interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  repository: string;
  demo?: string;
}