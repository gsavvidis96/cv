<template>
  <v-app>
    <slot />
  </v-app>
</template>

<script setup lang="ts"></script>

<style lang="scss">
* {
  font-family: "IBM Plex Mono", monospace !important;
}

.v-btn {
  text-transform: none;
}

ul {
  padding: revert;
}
</style>
