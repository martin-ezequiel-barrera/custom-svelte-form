import { writable } from 'svelte/store';

export type Comment = {
  name: string;
};

export type FormData = {
  string: string;
  boolean: boolean;
  exampleRadioEnum: string;
  number: number;
  integer: number;
  date: string;
  time: string;
  enum: string;
  comments: Comment[];
};

export const formData = writable<FormData>({
  string: "This is a string",
  boolean: true,
  exampleRadioEnum: "Two",
  number: 50.5,
  integer: 50,
  date: "2020-06-25",
  time: "23:08:00",
  enum: "Two",
  comments: [{ name: "John Morales" }, { name: "Rene Bustamante" }]
});

