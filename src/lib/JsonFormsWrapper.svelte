<script lang="ts">
  import { onMount } from 'svelte';
  import React from 'react';
  import { createEventDispatcher } from 'svelte';
  import { render } from 'react-dom';
  import { JsonForms } from '@jsonforms/react';
  import { materialRenderers } from '@jsonforms/material-renderers';

  export let schema = {};
  export let uischema = {};
  export let data = {}; 

  let container;
  const dispatch = createEventDispatcher();  // Initialize the dispatcher

  const handleChange = (updatedData) => {
    dispatch('data-change', updatedData);
  };

  onMount(() => {
    render(
      React.createElement(JsonForms, {
        schema,
        uischema,
        data: data,
        renderers: materialRenderers,
        onChange: handleChange,  
      }),
      container
    );
  });
</script>

<div bind:this={container}></div>
