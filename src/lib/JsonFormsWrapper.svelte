<script lang="ts">
  import { onMount } from "svelte";
  import React from "react";
  import { createEventDispatcher } from "svelte";
  import { createRoot } from "react-dom/client";
  import { JsonForms } from "@jsonforms/react";
  import { materialRenderers } from "@jsonforms/material-renderers";

  export let schema = {};
  export let uischema = { type: "Control" };
  export let data = {};

  let container: HTMLDivElement;
  const dispatch = createEventDispatcher();

  const handleChange = (updatedData: any) => {
    dispatch("data-change", updatedData);
  };

  onMount(() => {
    const root = createRoot(container);
    root.render(
      React.createElement(JsonForms, {
        schema,
        uischema,
        data,
        renderers: materialRenderers,
        onChange: handleChange,
      })
    );
  });
</script>

<div bind:this={container}></div>
