<template>
  <div class="intro">
    <a href="/" class="intro__link">
      <span class="visually-hidden">Go back home</span>
      🏔
    </a>
    <dl class="intro__meta">
      <div class="intro__meta-value">
        <dt class="visually-hidden">Coordinates</dt>
        <dd>39.7392° N, 104.9903° W</dd>
      </div>
      <div class="intro__meta-value intro__meta-value--accent">
        <dt>Updated</dt>
        <dd><time datetime="2021-10-20">20 October 2021</time></dd>
      </div>
    </dl>
    <div class="intro__headline">
      <h1>
        There are <em>{{ peakCount }} peaks</em> in Colorado exceeding 14,000' in elevation.
      </h1>
      <p>
        I intend to reach the top of every one of them before my time on this earth is through.
        <em
          >Here is a log of which I have summited<sub>({{ summitedPeakCount }})</sub>, and which yet remain to be
          conquered.</em
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['summitedPeakCount', 'peakCount'],
};
</script>
