<template>
  <article :class="`summit-list-item${mountain.climbed ? ' summit-list-item--summited' : ''}`">
    <!-- <label :for="mountain.name">
      Climbed
      <input type="checkbox" :name="mountain.name" :id="mountain.name" :checked="mountain.climbed" :disabled="true" />
    </label> -->
    <div>
      <span class="summit-list-item__label">Peak Name</span>
      <h1 class="summit-list-item__peak">{{ mountain.name }}</h1>
    </div>
    <SummitedTag v-if="mountain.climbed" class="summit-list-item__summited-tag" />
    <dl class="summit-list-item__meta">
      <div>
        <dt class="summit-list-item__label">Elevation</dt>
        <dd class="summit-list-item__value">{{ mountain.elevation | formatElevation }}</dd>
      </div>
      <div>
        <dt class="summit-list-item__label">Range</dt>
        <dd class="summit-list-item__value">{{ mountain.range }}</dd>
      </div>
      <div>
        <dt class="summit-list-item__label">Summited</dt>
        <dd class="summit-list-item__value">
          <time>{{ mountain.summitDate || 'N/A' }}</time>
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
  filters: {
    formatElevation(elevation) {
      return `${elevation.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}'`;
    },
  },
};
</script>

<style></style>
