<script>
import feather from 'feather-icons';

export default {
	props: ['projectInfo'],

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		<!-- Single project left section details -->
		<div class="w-full sm:w-1/3 text-left">
			<!-- Single project client details -->
			<div class="mb-7">
				<p
					class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
				>
					{{ projectInfo.clientHeading }}
				</p>
				<ul class="leading-loose">
					<li
						v-for="info in projectInfo.companyInfos"
						:key="info"
						class="font-general-regular text-ternary-dark dark:text-ternary-light"
					>
						<span>{{ info.title }}: </span>
						<a
							href="#"
							:class="
								info.title == 'Website' || info.title == 'Phone'
									? 'hover:underline cursor-pointer'
									: ''
							"
							aria-label="Project Website and Phone"
							>{{ info.details }}</a
						>
					</li>
				</ul>
			</div>

			<!-- Single project objectives -->
			<div class="mb-7">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.objectivesHeading }}
				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light"
				>
					{{ projectInfo.objectivesDetails }}
				</p>
			</div>

			<!-- Single project technologies -->
			<div class="mb-7">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.technologies[0].title }}
				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light"
				>
					{{ projectInfo.technologies[0].techs.join(', ') }}
				</p>
			</div>

			<!-- Single project social sharing -->
			<div>
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.socialSharingsHeading }}
				</p>
				<div class="flex items-center gap-3 mt-5">
					<a
						v-for="social in projectInfo.socialSharings"
						:key="social.id"
						:href="social.url"
						target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
						><i
							:data-feather="social.icon"
							class="w-4 lg:w-5 h-4 lg:h-5"
						></i
					></a>
				</div>
			</div>
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
			>
				{{ projectInfo.projectDetailsHeading }}
			</p>
      <div
          v-for="projectDetail in projectInfo.projectDetails"
          :key="projectDetail.id"
          class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light project-detail"
          v-html="projectDetail.details"
      ></div>
    </div>
	</div>
</template>

<style>
/* Appliqué à tout le contenu injecté par v-html */
.project-detail {
  font-family: 'GeneralSans-Regular'; /* font-general-regular */
  font-size: 1.125rem; /* équivalent text-lg */
  color: #1f2937; /* approximatif de text-ternary-dark */
  margin-bottom: 1.25rem; /* mb-5 */
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .project-detail {
    color: #e5e7eb; /* équivalent text-ternary-light */
  }
}

/* Titres */
.project-detail h1,
.project-detail h2,
.project-detail h3,
.project-detail h4,
.project-detail h5,
.project-detail h6 {
  font-family: 'GeneralSans-Medium'; /* font-general-medium */
  margin-bottom: 0.5rem; /* mb-2 */
}

.project-detail h1 { font-size: 2rem; }   /* text-3xl */
.project-detail h2 { font-size: 1.75rem; }/* text-2xl */
.project-detail h3 { font-size: 1.25rem; }/* text-xl */
.project-detail h4 { font-size: 1.125rem; }/* text-lg */
.project-detail h5 { font-size: 1rem; }   /* text-base */
.project-detail h6 { font-size: 0.875rem; }/* text-sm */

/* Paragraphes */
.project-detail p {
  margin-bottom: 1.25rem; /* mb-5 */
}

/* Listes */
.project-detail ul {
  list-style-type: disc;
  padding-left: 1.25rem; /* pl-5 */
  margin-bottom: 0.5rem; /* mb-2 */
}

.project-detail ol {
  list-style-type: decimal;
  padding-left: 1.25rem;
  margin-bottom: 0.5rem;
}

.project-detail li {
  margin-bottom: 0.25rem; /* mb-1 */
}

/* Liens */
.project-detail a {
  color: inherit;
  text-decoration: underline;
}

/* Images si besoin */
.project-detail img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0.5rem 0;
}

.project-detail * {
  @apply text-ternary-dark;
}

.dark .project-detail * {
  @apply text-ternary-light;
}

</style>
