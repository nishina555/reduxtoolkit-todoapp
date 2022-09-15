export type TodoState = {
  allIds: Array<number>;
  byId: { [key: number]: TodoItemState };
};

export type TodoItemState = {
  id: number;
  content: string;
  completed: boolean;
};
