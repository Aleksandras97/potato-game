<template> 
<BaseCard>
  <Sorting />
  <Table />
</BaseCard>
</template>

<script>
import Table from './components/Main/Table.vue'
import Sorting from './components/Main/Sorting.vue'

export default {
  components: {
    Table,
    Sorting
  }
};
</script>

<style>
:root {
  /* buttons */
  --button-primary: #FF8D00;
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
