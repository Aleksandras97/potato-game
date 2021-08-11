<template>
  <DataTable :value="generatedPeople" @row-reorder="onRowReorder">
    <Column :rowReorder="true" headerStyle="width: 3em" />
    <Column field="email" header="Email"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="potatoes" header="Potatoes"></Column>
  </DataTable>
  <!-- <button @click="isArraySorted">Test</button>
  <p>{{ isSorted }}</p> -->
</template>

<script>
export default {
  emits: ["row-reorder"],
  props: ["generatedPeople"],
  data() {
    return {
      people: [],
    };
  },
  methods: {
    onRowReorder(event) {
      // console.log(event.value);
      this.$emit("row-reorder", event.value);
    },
  },
};
</script>

<style scoped></style>
