<template>
  <BaseCard>
    <Game @generate-people="getPeople" @unsort="unsort" :isSorted="isSorted" />
    <Table :generatedPeople="people" @row-reorder="reorder" />
  </BaseCard>
</template>

<script>
import Table from "./components/Main/Table.vue";
import Game from "./components/Main/Game.vue";

export default {
  components: {
    Table,
    Game,
  },
  data() {
    return {
      people: [],
      isSorted: false,
      timeToStart: 3000,
    };
  },
  methods: {
    getPeople(people) {
      this.people = people;
    },
    reorder(values) {
      this.people = values;

      this.isSorted = this.arraySortedOrNot(this.people, this.people.length);
    },
    arraySortedOrNot(arr, n) {
      // Array has one or no element
      if (n == 0 || n == 1) return true;

      for (let i = 1; i < n; i++)
        // Unsorted pair found
        if (arr[i - 1].potatoes > arr[i].potatoes) return false;

      // No unsorted pair found
      return true;
    },
    unsort() {
      this.isSorted = false;
    }
  },
};
</script>

<style>
:root {
  /* buttons */
  --color-primary: #ff8d00;
  --color-gray: #cccccc;
}
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
* {
  box-sizing: border-box;
}
html {
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
}
</style>
