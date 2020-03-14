export interface Row {
  header: string;
  description: string;
  deadline: string;
  hour: string;
  status: 'finished'|'unfinished';
  id: number;
}
