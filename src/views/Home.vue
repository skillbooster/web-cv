<template>
  <div class="home">
    <Header id="header"
      :skills='skills'></Header>
    <Skills id="skills"
      :skills='skills'></Skills>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Home/Header.vue';
import Skills from '@/components/Home/Skills.vue';

export default {
  name: 'home',
  data() {
    return {
      skills: [
        {
          img: '/app-images/gnu.jpg',
          name: 'html',
        },
        {
          img: '/app-images/gnu.jpg',
          name: 'css',
        },
        {
          img: '/app-images/gnu.jpg',
          name: 'JS',
        },
        {
          img: '/app-images/gnu.jpg',
          name: 'VueJs',
        },
        {
          img: '/app-images/gnu.jpg',
          name: 'PHP',
        },
        {
          img: '/app-images/gnu.jpg',
          name: 'NodeJs',
        },
        {
          img: '/app-images/gnu.jpg',
          name: 'MongoDB',
        },
        {
          img: '/app-images/gnu.jpg',
          name: 'MySQL',
        },
      ],
    };
  },
  components: {
    HelloWorld,
    Header,
    Skills,
  },
};
</script>

<style scoped lang="scss">
.home {
  background: white no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: none;
}

</style>
