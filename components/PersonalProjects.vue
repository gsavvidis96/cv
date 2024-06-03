<template>
  <div class="d-flex flex-column ga-4">
    <div
      class="text-h6 text-center text-md-start align-self-center align-self-md-start"
    >
      Personal Projects
    </div>

    <ul class="d-flex flex-column ga-4">
      <li>
        <div class="d-flex flex-column align-start">
          <a
            href="https://budget.gsavvidis.com"
            target="_blank"
            class="text-body-1 text-primary mb-1"
            >Budget Calculator</a
          >

          <div class="text-body-2">
            This project was created for fun and showcasing purposes. The main
            technologies used include
            <span class="font-weight-bold">Typescript</span>,
            <span class="font-weight-bold">Nuxt.js</span>,
            <span class="font-weight-bold">Node.js</span>,
            <span class="font-weight-bold">Neon Serverless Postgres</span>, and
            <span class="font-weight-bold">Serverless Framework</span>. It's
            split into two repos: one for the
            <a
              href="https://github.com/gsavvidis96/budget-calculator-client"
              target="_blank"
              class="text-primary"
              >Client</a
            >
            and one for the
            <a
              href="https://github.com/gsavvidis96/budget-calculator-api"
              target="_blank"
              class="text-primary"
              >API</a
            >.
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
