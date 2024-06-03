<template>
  <div class="d-flex flex-column flex-grow-1 pa-5 align-center">
    <div class="inner-wrapper d-flex flex-column ga-5 flex-grow-1">
      <v-btn color="secondary" icon @click="toggleDark()" density="comfortable">
        <template v-slot:default>
          <v-icon>mdi-theme-light-dark</v-icon>
        </template>
      </v-btn>

      <div class="d-flex flex-column flex-md-row ga-5 align-md-start">
        <div class="d-flex flex-column ga-5">
          <general-info />

          <core-skills />
        </div>

        <div
          class="d-flex flex-column bg-background3 rounded pa-5 flex-grow-1 ga-6"
        >
          <professional-experience />

          <v-divider />

          <education />

          <v-divider />

          <personal-projects />

          <v-divider />

          <hobbies />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import GeneralInfo from "@/components/GeneralInfo.vue";
import CoreSkills from "@/components/CoreSkills.vue";
import ProfessionalExperience from "@/components/ProfessionalExperience.vue";
import Education from "@/components/Education.vue";
import PersonalProjects from "@/components/PersonalProjects.vue";
import Hobbies from "@/components/Hobbies.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
const theme = useTheme();
const isDarkCookie = useCookie<boolean>("isDarkCookie");

onMounted(() => {
  watch(isDark, (newValue) => {
    theme.global.name.value = newValue ? "dark" : "light";
    isDarkCookie.value = newValue;
  });
});
</script>

<style scoped lang="scss">
.inner-wrapper {
  width: 1488px;

  @media only screen and (max-width: 1528px) {
    width: 100%;
  }
}
</style>
