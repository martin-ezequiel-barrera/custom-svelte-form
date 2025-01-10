<script lang="ts">
  import { writable, get } from "svelte/store";
  import JsonFormsWrapper from "$lib/JsonFormsWrapper.svelte";
  import schema from "../schemas/schema.json";
  import uischema from "../schemas/uischema.json";

  type FormData = {
    string: string;
    boolean: boolean;
    exampleRadioEnum: string;
    number: number;
    integer: number;
    date: string;
    time: string;
    enum: string;
    comments: { name: string; message: string }[];
  };

  const formData = writable<FormData>({
    string: "This is a string",
    boolean: true,
    exampleRadioEnum: "Two",
    number: 50.5,
    integer: 50,
    date: "2020-06-25",
    time: "23:08:00",
    enum: "Two",
    comments: [
      { name: "John Morales", message: "This is an example message" },
      { name: "Paul Walker", message: "Get ready for booohay" },
    ],
  });

  let data = $formData;

  const handleDataChange = (event: CustomEvent<FormData>) => {
    const updatedData: FormData = event.detail;
    formData.set(updatedData);
  };

  const handleSubmit = async () => {
    const formValues = get(formData);
    alert("Form submitted with data");

    try {
      const response = await fetch("https://xxx.com/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        const result = await response.json();
      } else {
        console.error("Error submitting form:", response.status);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
</script>

<div class="container">
  <div class="form-section">
    <form on:submit|preventDefault={handleSubmit}>
      <JsonFormsWrapper
        {schema}
        {uischema}
        {data}
        on:data-change={handleDataChange}
      />
      <div class="button-container">
        <button type="submit" class="submit-button">Submit</button>
      </div>
    </form>
  </div>

  <div class="data-section">
    <h3>Form Data (Preview)</h3>
    <textarea
      class="textarea"
      readonly
      value={JSON.stringify($formData, null, 2)}
    ></textarea>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
  }

  .form-section {
    width: 50%;
  }

  .data-section {
    width: 45%;
    border: 1px solid #ccc;
    padding: 15px;
    font-size: 16px;
    background-color: #f4f4f4;
    height: 650px;
    overflow-y: scroll;
  }

  .textarea {
    width: 99%;
    height: 89%;
    padding: 10px;
    border: none;
    background: #fff;
    resize: none;
    font-family: Arial, sans-serif;
    font-size: 14px;
  }

  .button-container {
    text-align: center;
    margin-top: 10px;
  }

  .submit-button {
    background-color: #4caf50;
    color: white;
    font-size: 14px;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    max-width: 250px;
    transition:
      background-color 0.3s,
      transform 0.2s;
  }
</style>
