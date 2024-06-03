<template>
  <div
    class="bg-background3 rounded py-5 d-flex flex-column align-center align-md-stretch ga-5"
  >
    <div class="d-flex flex-column px-5">
      <div class="text-h5">Giannis Savvidis</div>
      <div class="text-body-2">Fullstack web developer</div>
    </div>

    <v-divider class="align-self-stretch" />

    <div class="d-flex flex-column ga-2 px-5">
      <div class="d-flex ga-2 align-center">
        <div class="text-body-2 font-weight-bold">Age:</div>

        <div class="text-body-2">{{ currentYear - 1996 }}</div>
      </div>

      <div class="d-flex ga-2 align-center">
        <div class="text-body-2 font-weight-bold">Location:</div>

        <div class="text-body-2">Athens, Greece</div>
      </div>

      <div class="d-flex ga-2 align-center">
        <div class="text-body-2 font-weight-bold">Email:</div>

        <a class="text-body-2 text-primary" href="mailto:gsavvidis96@gmail.com"
          >gsavvidis96@gmail.com</a
        >
      </div>

      <div class="d-flex flex-column pt-1 ga-2">
        <v-btn
          prepend-icon="mdi-github"
          color="secondary"
          density="comfortable"
          href="https://github.com/gsavvidis96"
          target="_blank"
          >GitHub</v-btn
        >

        <v-btn
          prepend-icon="mdi-linkedin"
          color="secondary"
          density="comfortable"
          href="https://www.linkedin.com/in/giannis-savvidis-22340a188/"
          target="_blank"
          >LinkedIn</v-btn
        >

        <v-btn
          prepend-icon="mdi-download-box"
          color="secondary"
          density="comfortable"
          href="CV.pdf"
          target="_blank"
          >Download CV</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped></style>
