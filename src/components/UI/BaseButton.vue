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
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
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
  border-color: var(--color-primary);
  color: var(--color-primary);
}
.gray {
  background-color: transparent;
  color: var(--color-gray);
  border-color: var(--color-gray);
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
.gray:hover,
.gray:active,
.outline:hover,
.outline:active {
  background-color: transparent;
  border-color: var(--button-gray);
  color: var(--button-gray);
}
.neon:hover,
.neon:active {
  background-color: transparent;
  border-color: #72147E;
  color: #72147E;
}
</style>
