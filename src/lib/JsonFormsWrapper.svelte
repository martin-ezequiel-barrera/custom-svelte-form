<script lang="ts">
  import { onMount } from 'svelte';
  import React from 'react';
  import { createEventDispatcher } from 'svelte';
  import { createRoot } from 'react-dom/client'; // Correct import for React 18
  import { JsonForms } from '@jsonforms/react';
  import { materialRenderers } from '@jsonforms/material-renderers'; // Using material theme for UI

  export let schema = {};
  export let uischema = {};
  export let data = {}; // Data passed from Svelte store or parent component

  let container;
  const dispatch = createEventDispatcher(); // Initialize the dispatcher

  const handleChange = (updatedData) => {
    dispatch('data-change', updatedData); // Dispatch updated data
  };

  onMount(() => {
    const root = createRoot(container); // Create React root
    root.render( // Render the React component
      React.createElement(JsonForms, {
        schema,
        uischema,
        data,
        renderers: materialRenderers,
        onChange: handleChange, // Handle changes to form data
      })
    );
  });
</script>

<div bind:this={container}></div>
