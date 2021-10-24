<template>
  <article :class="`summit-list-item${mountain.climbed ? ' summit-list-item--summited' : ''}`" :id="id">
    <div class="summit-list-item__title">
      <span class="summit-list-item__label">Peak Name</span>
      <h1 class="summit-list-item__peak">
        <a class="summit-list-item__link" :href="`#${id}`"> {{ mountain.name }}</a>
      </h1>
    </div>
    <SummitedTag v-if="mountain.climbed" class="summit-list-item__summited-tag" />
    <dl class="summit-list-item__meta">
      <div>
        <dt class="summit-list-item__label">Elevation</dt>
        <dd class="summit-list-item__value summit-list-item__value--tnums">
          {{ mountain.elevation | formatElevation }}
        </dd>
      </div>
      <div>
        <dt class="summit-list-item__label">Range</dt>
        <dd class="summit-list-item__value">{{ mountain.range }}</dd>
      </div>
      <div>
        <dt class="summit-list-item__label">Summited</dt>
        <dd class="summit-list-item__value">
          <time>{{ mountain.summitDate || 'N/A' | formatDate }}</time>
        </dd>
      </div>
    </dl>
  </article>
</template>

<script>
import SummitedTag from './SummitedTag.vue';

export default {
  props: ['mountain'],
  components: { SummitedTag },
  computed: {
    id() {
      return this.mountain.name
        .normalize()
        .toLowerCase()
        .replace(/(\w)\'/g, '$1')
        .replace(/[^a-z0-9_\-]+/g, '-')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
  },
  filters: {
    formatId(peakName) {
      return peakName
        .normalize()
        .toLowerCase()
        .replace(/(\w)\'/g, '$1')
        .replace(/[^a-z0-9_\-]+/g, '-')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    formatElevation(elevation) {
      return `${elevation.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}′`;
    },
    formatDate(date) {
      if (date === 'N/A') return date;
      return new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric', day: 'numeric' });
    },
  },
};
</script>

<style></style>
