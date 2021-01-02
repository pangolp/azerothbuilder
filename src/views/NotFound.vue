<template>
  <center>
    <h1>Not Found!</h1>
    <p>
      <a href="#">
        <router-link to="/">Builder SQL for AzerothCore</router-link>
      </a>
    </p>
  </center>
</template>

<script>

  export default {
    name: 'NotFound'
  }

</script>

<style scoped>

  center {
    margin: 15vw;
  }

  h1 {
    color: var(--border);
    font-size: 2em;
  }

</style>
