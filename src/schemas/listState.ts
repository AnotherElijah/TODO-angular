export interface listState {
  rowCreation: boolean;
  filter: 'finished' | 'unfinished' | '';
  order: 'minToMax'|'maxToMin';
}
