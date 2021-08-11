<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: var(--button-primary);
  border: 1px solid var(--button-primary);
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 0.5rem;
  display: inline-block;
}
a:hover,
a:active,
button:hover,
button:active {
  background-color: transparent;
  border-color: var(--button-primary);
  color: var(--button-primary);
}
.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}
.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}
.neon {
  background-color: #72147E;
  border-color: #72147E;
  color: white;
}
.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
.neon:hover,
.neon:active {
  background-color: transparent;
  border-color: #72147E;
  color: #72147E;
}
</style>
