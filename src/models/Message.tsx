import { Action } from "./App";

export type Message = {
  authorId: number,
  content: string,
  sentAt: Date,
  associatedToId: number,
  associatedToType: AssociatedToType
}

export enum AssociatedToType {
  Job = 'Job',
  Property = 'Property'
}

export const messageReducer = (state: Message, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return { ...state, ...payload };
  }
}