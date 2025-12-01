<script>
import feather from 'feather-icons';
import projects from '@/data/projects.js';

import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';

export default {
  name: 'SingleProject',
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    ProjectRelatedProjects,
  },
  props: ['id'],

  computed: {
    project() {
      return projects.find(p => p.id == this.id);
    },
  },

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div v-if="project" class="container mx-auto mt-10 sm:mt-20">
    <ProjectHeader :singleProjectHeader="project.header" />
    <ProjectGallery :projectImages="project.images" />
    <ProjectInfo :projectInfo="project.info" />
    <ProjectRelatedProjects :relatedProject="project.related" />
  </div>

  <div v-else class="text-center py-20 text-2xl">
    Project Not Found
  </div>
</template>

<style scoped></style>
