<template>
  <main>
    <Intro :peakCount="peakCount" :summitedPeakCount="summitedPeakCount" />
    <ul class="peaks-list">
      <li v-for="mountain in sortedMountains" :key="mountain.name">
        <SummitListItem :mountain="mountain" />
      </li>
    </ul>
    <Footer />
  </main>
</template>

<script>
import Intro from './_includes/Intro.vue';
import SummitListItem from './_includes/SummitListItem.vue';
import Footer from './_includes/Footer.vue';
export default {
  components: {
    Intro,
    SummitListItem,
    Footer,
  },
  data() {
    return {
      eleventyComputed: {
        peakCount: (data) => data.mountains.length,
        summitedPeakCount: (data) => data.mountains.filter((mtn) => mtn.climbed).length,
        sortedMountains: (data) => data.mountains.sort((a, b) => (a.climbed < b.climbed ? 1 : -1)),
      },
    };
  },
};
</script>

<style></style>
