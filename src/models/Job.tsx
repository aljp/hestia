export type Job = {
  id: number | undefined;
  title: string;
  when: Date;
  where: string;
  comments: string[];
}
