export type TodoState = {
  allIds: Array<number>;
  byId: { [key: number]: TodoItem };
};

export type TodoItem = {
  id: number;
  content: string;
  completed: boolean;
};
