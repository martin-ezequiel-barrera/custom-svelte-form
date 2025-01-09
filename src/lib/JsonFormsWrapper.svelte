<script lang="ts">
  import { onMount } from 'svelte';
  import React from 'react';
  import { createEventDispatcher } from 'svelte';
  import { render } from 'react-dom';
  import { JsonForms } from '@jsonforms/react';
  import { materialRenderers } from '@jsonforms/material-renderers';  // Using material theme for UI

  export let schema = {};
  export let uischema = {};
  export let formData = {};  // Data passed from Svelte store or parent component

  let container;
  const dispatch = createEventDispatcher();  // Initialize the dispatcher

  const handleChange = (updatedData) => {
    // Trigger the change handler in the parent component
    dispatch('data-change', updatedData);  // Dispatch the updated data
  };

  onMount(() => {
    render(
      React.createElement(JsonForms, {
        schema,
        uischema,
        data: formData,
        renderers: materialRenderers,
        onChange: handleChange,  // Handle changes to form data
      }),
      container
    );
  });
</script>

<div bind:this={container}></div>
