<template>
  <header>
    <h1>Sorting Training System</h1>

    <h1 class="game-score" v-if="isPlaying">Game started</h1>

    <BaseButton @click="toggleModal">Start sorting!</BaseButton>

    <Dialog
      header="How many people"
      v-model:visible="displayModal"
      :style="{ width: '40rem' }"
      :modal="true"
    >
      <form>
        <div class="form-control" :class="{ invalid: !numberIsValid }">
          <label for="people"
            >Enter the number of how many people you want to add to the
            list</label
          >
          <input
            type="number"
            id="people"
            v-model.trim="peopleCount"
            autofocus
          />
        </div>

        <p class="message" v-if="!numberIsValid">
          Pleace enter a number from 20 to 100!
        </p>

        <div class="actions">
          <BaseButton
            mode="gray"
            @click.prevent="toggleModal"
            class="p-button-text"
            >Cancel</BaseButton
          >
          <BaseButton @click.prevent="submitForm">Start</BaseButton>
        </div>
      </form>
      <template #footer> </template>
    </Dialog>
  </header>
</template>

<script>
export default {
  data() {
    return {
      displayModal: false,
      peopleCount: null,
      isPlaying: false,
      people: [],
      numberIsValid: true,
    };
  },
  methods: {
    startGame() {
      this.isPlaying = true;
    },
    toggleModal() {
      this.displayModal = !this.displayModal;
    },
    submitForm() {
      this.people = [];
      this.validateNumber();

      if (!this.numberIsValid) {
        return;
      }

      const numbers = this.getRandomuUniqueiNumbers(this.peopleCount);

      for (let index = 0; index < this.peopleCount; index++) {
        const person = {
          id: new Date().toISOString(),
          name: "Name" + numbers[index],
          email: "Email" + numbers[index],
          potatoes: numbers[index],
        };

        this.people.push(person);
      }

      this.$emit("generate-people", this.people);

      this.toggleModal();
      this.startGame();
    },
    validateNumber() {
      this.numberIsValid = true;
      if (this.peopleCount < 5 || this.peopleCount > 100) {
        this.numberIsValid = false;
      }
    },
    getRandomuUniqueiNumbers(num) {
      var arr = [];
      while (arr.length < num) {
        var r = Math.floor(Math.random() * 100) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
      }
      return arr;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

form {
  margin: 1rem;
  /* border-top: 1px solid #ccc; */
  /* border-bottom: 1px solid #ccc; */
  padding: 1rem;
}
.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  margin-bottom: 2rem;
}
input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0.4rem;
}

input:focus,
textarea:focus {
  border-color: var(--color-primary);
  background-color: transparent;
  outline: none;
}

.actions {
  text-align: right;
}

.invalid label,
.message {
  color: crimson;
}
.invalid input,
.invalid textarea {
  border: 1px solid crimson;
}

.game-score {
  color: greenyellow;
}
</style>
