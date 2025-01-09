  // src/stores/formData.js
  import { writable } from 'svelte/store';

  // Define the store with the appropriate data structure
  export const formData = writable({
    string: "This is a string",
    boolean: true,
    exampleRadioEnum: "Two",
    number: 50.5,
    integer: 50,
    date: "2020-06-25",
    time: "23:08:00",
    dateTime: "2025-01-09T12:00:00Z",
    enum: "Two",
    comments: [
      { date: "2021-07-15", message: "This is a comment" },
      { date: "2025-01-09", message: "Get ready for booohay" }
    ]
  });