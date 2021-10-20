<template>
  <footer class="footer">
    <div class="footer__inner">
      <p>
        Hi I'm <a href="https://twitter.com/xdesro">Henry</a>, I made this in <span v-html="`{{ year }}`" /> with
        <span v-html="`{{ emoji }}`" /> or whatever. <a href="https://henry.codes">Here's my website</a> if you want and
        <a href="https://github.com/xdesro/peaks">the source code is here</a>.
      </p>
      <p>
        Uses <a href="https://www.11ty.dev/">Eleventy</a> for templating, and good ol' HTML and CSS. Fonts in use are
        <a href="https://bretagnebretagne.fr/font/self-modern-regular/">Self Modern</a> and
        <a href="https://catalog.monotype.com/family/linotype/neue-haas-grotesk-display">Neue Haas Grotesk</a>.
      </p>
    </div>
  </footer>
</template>
