<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
  components: {
    AboutClientSingle,
  },

  data() {
    return {
      clientsHeading: "Les langages/technologies que j'utilise",
      categories: [
        {
          id: 1,
          title: 'Web',
          tools: [
            {id: 1, title: 'HTML', img: require('@/assets/images/brands/html.png')},
            {id: 2, title: 'CSS', img: require('@/assets/images/brands/css.png')},
            {id: 3, title: 'Javascript', img: require('@/assets/images/brands/javascript.png')},
            {id: 4, title: 'VueJS', img: require('@/assets/images/brands/vuejs.png')},
            {id: 15, title: 'PHP', img: require('@/assets/images/brands/php.png')}
          ],
        },
        {
          id: 3,
          title: 'Backend',
          tools: [
            {id: 6, title: 'Flask', img: require('@/assets/images/brands/flask.png')},
            {id: 9, title: 'NodeJS', img: require('@/assets/images/brands/nodejs.png')},
            {id: 10, title: 'Express', img: require('@/assets/images/brands/express.png')},
          ],
        },
        {
          id: 2,
          title: 'IA',
          tools: [
            {id: 19, title: 'Scikit-learn', img: require('@/assets/images/brands/scikit-learn.png')},
            {id: 8, title: 'OpenCV', img: require('@/assets/images/brands/opencv.png')},
          ],
        },
        {
          id: 4,
          title: 'Base de données',
          tools: [
            {id: 11, title: 'MySQL', img: require('@/assets/images/brands/mysql.png')},
            {id: 12, title: 'MariaDB', img: require('@/assets/images/brands/mariadb.png')},
            {id: 13, title: 'Postgres', img: require('@/assets/images/brands/postgres.png')},
            {id: 14, title: 'MongoDB', img: require('@/assets/images/brands/mongodb.png')},
          ]
        },
        {
          id: 5,
          title: 'Application',
          tools: [
            {id: 5, title: 'Python', img: require('@/assets/images/brands/python.png')},
            {id: 7, title: 'Java', img: require('@/assets/images/brands/java.png')},
            {id: 18, title: 'JavaFX', img: require('@/assets/images/brands/javafx.png')},
            {id: 16, title: 'C', img: require('@/assets/images/brands/c.png')},
            {id: 17, title: 'Cpp', img: require('@/assets/images/brands/cpp.png')},
          ]
        },
        {
          id: 6,
          title: 'Outils de développement',
          tools: [
            {id: 20, title: 'git', img: require('@/assets/images/brands/git.png')},
            {id: 21, title: 'gitlab', img: require('@/assets/images/brands/gitlab.png')},
            {id: 22, title: 'gitlab-runner', img: require('@/assets/images/brands/gitlab-runner.png')},
            {id: 23, title: 'github', img: require('@/assets/images/brands/github.png')},
            {id: 24, title: 'docker', img: require('@/assets/images/brands/docker.png')},
          ]
        }
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">

    <p
        class="font-general-bold text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ clientsHeading }}
    </p>

    <br>

    <div v-for="category in categories" :key="category.id" class="mb-12">
      <p class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
        {{ category.title }}
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-4 mt-6 gap-2">
        <AboutClientSingle
            v-for="tool in category.tools"
            :key="tool.id"
            :client="tool"
        />
      </div>
    </div>

  </div>
</template>

