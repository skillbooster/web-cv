<template>
  <div id="app">
    <topnav></topnav>
    <transition name="fade">
      <router-view id="main-content"/>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';

import TopNav from './components/MainTopNav.vue';

export default Vue.extend({
  name: 'app',
  components: {
    topnav: TopNav,
  },
});
</script>

<style lang="scss">
@import './styles/_variables.scss';

* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main-content {
  height: calc(100% - $top-nav-height);
  padding-top: $top-nav-height;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  transition: opacity 0s;
}
</style>
