<script lang="ts">
  import JsonFormsWrapper from '$lib/JsonFormsWrapper.svelte';
  import schema from '../schemas/schema.json';
  import uischema from '../schemas/uischema.json';
  import { formData } from '../stores/formData';

  let data = $formData;  // Bind formData to this component

  // Handle data change event from JsonFormsWrapper
  const handleDataChange = (event: CustomEvent<FormData>) => {
    const updatedData: FormData = event.detail;  // Extract updated data from the event
    console.log('Data has changed:', updatedData);  // Handle the data change (log or store)
    formData.set(updatedData);  // Optionally update the store with the new data
  };
</script>

<h1>My Dynamic Form</h1>

<!-- Bind schema, UI schema, and data, and listen to the custom 'data-change' event -->
<JsonFormsWrapper {schema} {uischema} {data} on:data-change={handleDataChange} />
