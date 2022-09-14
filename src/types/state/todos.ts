export type TodoState = {
  allIds: Array<number>;
  byId: { [key: string]: TodoItemState };
};
export type TodoItemState = {
  content: string;
  completed: boolean;
};
