<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio:
              "Étudiant en troisième année de B.U.T informatique, je suis passionné par l'informatique depuis de nombreuses années. J'aime particulièrement travailler sur des projets qui me permettent de résoudre des problèmes concrets et d'innover. Que ce soit à travers des projets académiques ou personnels, je cherche toujours à repousser les limites de mes connaissances et à explorer de nouvelles technologies.",
        },
      ],

      softSkills: [
        { id: 1, skill: "Travail d'équipe" },
        { id: 2, skill: "Communication" },
        { id: 3, skill: "Organisation" },
        { id: 4, skill: "Autonomie" },
        { id: 5, skill: "Résolution de problèmes" },
        { id: 6, skill: "Adaptabilité" },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img
          src="@/assets/images/profile.jpeg"
          class="rounded-xl w-96"
          alt="photo de profil"
      />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
          v-for="bio in bios"
          :key="bio.id"
          class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>

      <!-- Formation -->
      <div class="mt-10">
        <h2 class="text-2xl font-semibold text-primary-dark dark:text-primary-light mb-4">
          Formation
        </h2>

        <div class="space-y-6">
          <!-- BUT informatique -->
          <div
              class="bg-primary-light dark:bg-ternary-dark p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h3 class="text-xl font-medium text-ternary-dark dark:text-ternary-light">
              B.U.T Informatique (3ᵉ année)
            </h3>
            <p class="text-ternary-dark dark:text-ternary-light">
              IUT Nord Franche-Comté — Belfort (90)
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">2023 — 2026</p>
          </div>

          <!-- Bac général -->
          <div
              class="bg-primary-light dark:bg-ternary-dark p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h3 class="text-xl font-medium text-ternary-dark dark:text-ternary-light">
              Baccalauréat général
            </h3>
            <p class="text-ternary-dark dark:text-ternary-light">
              Spécialités : Mathématiques, Biologie-Écologie
            </p>
            <p class="text-ternary-dark dark:text-ternary-light">
              Lycée Granvelle — Dannemarie-sur-Crête (25)
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">2023</p>
          </div>
        </div>
      </div>

      <!-- Soft Skills -->
      <div class="mt-10">
        <h2 class="text-2xl font-semibold text-primary-dark dark:text-primary-light mb-4">
          Soft Skills
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
              v-for="skill in softSkills"
              :key="skill.id"
              class="bg-primary-light dark:bg-ternary-dark p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <p class="text-lg text-ternary-dark dark:text-ternary-light">
              {{ skill.skill }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
