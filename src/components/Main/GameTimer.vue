<template>
    <div>
        <h1 class="game-score" v-if="isPlaying" >Game started</h1>
        <InlineMessage class="message" v-else-if="!isPlaying && reactionTime != 0" severity="success">Congratulations your Time is {{ timer }} ms</InlineMessage>
    </div>
</template>

<script>
    export default {
        props: ['isPlaying', 'reactionTime'],
        computed: {
            timer() {
                return (this.reactionTime / 1000).toFixed(2);
            }
        }
    }
</script>

<style scoped>

.game-score {
  color: greenyellow;
  text-align: center;
}

.message {
    justify-content: center;
    display: flex;
    margin: 1rem 0;
}
</style>