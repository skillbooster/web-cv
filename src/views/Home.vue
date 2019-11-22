<template>
  <div class="home">
    <Header id="header"
      :skills='skills'
      @skill-open='openSkill'></Header>
    <Skills id="skills"
      :skills='skills'
      @skill-open='openSkill'></Skills>
    <SkillCloseUp v-if="closeUpForSkill"
      :skillData="skillCloseUpData"
      @skill-close="closeSkill">
    </SkillCloseUp>
    <Experience @exp-open='openExp'></Experience>
    <ExpCloseUp v-if="closeUpForExp"
      :expData="expCloseUpData"
      @exp-close="closeExp">
    </ExpCloseUp>
    <Passions></Passions>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Home/Header.vue';
import Skills from '@/components/Home/Skills.vue';
import SkillCloseUp from '@/components/Home/SkillCloseUp.vue';
import Experience from '@/components/Home/Experience.vue';
import ExpCloseUp from '@/components/Home/ExpCloseUp.vue';
import Passions from '@/components/Home/Passions.vue';

export default {
  name: 'home',
  data() {
    return {
      skillIndex: 0,
      showSkill: false,
      skills: [
        {
          img: '/app-images/SkillLogo/html5.jpg',
          name: 'html',
          codeSnippet: '/app-images/CodeSnippets/VueJs.jpg',
        },
        {
          img: '/app-images/SkillLogo/css3.jpg',
          name: 'css',
        },
        {
          img: '/app-images/SkillLogo/sass.jpg',
          name: 'sass',
        },
        {
          img: '/app-images/SkillLogo/js.jpg',
          name: 'JS',
        },
        {
          img: '/app-images/SkillLogo/vuejs.jpg',
          name: 'VueJs',
        },
        {
          img: '/app-images/SkillLogo/webpack.jpg',
          name: 'webpack',
        },
        {
          img: '/app-images/SkillLogo/python.jpg',
          name: 'python',
        },
        {
          img: '/app-images/SkillLogo/php.jpg',
          name: 'PHP',
        },
        {
          img: '/app-images/SkillLogo/nodejs.jpg',
          name: 'NodeJs',
        },
        {
          img: '/app-images/SkillLogo/mongodb.jpg',
          name: 'MongoDB',
        },
        {
          img: '/app-images/SkillLogo/mysql.jpg',
          name: 'MySQL',
        },
        {
          img: '/app-images/SkillLogo/c++.jpg',
          name: 'c++',
        },
        {
          img: '/app-images/SkillLogo/ttcn3.jpg',
          name: 'ttcn3',
        },
        {
          img: '/app-images/SkillLogo/git.jpg',
          name: 'git',
        },
        {
          img: '/app-images/SkillLogo/svn.jpg',
          name: 'svn',
        },
        {
          img: '/app-images/SkillLogo/jenkins.jpg',
          name: 'jenkins',
        },
        {
          img: '/app-images/SkillLogo/jquery.jpg',
          name: 'jquery',
        },
        {
          img: '/app-images/SkillLogo/bootstrap.jpg',
          name: 'bootstrap',
        },
        {
          img: '/app-images/SkillLogo/linux.jpg',
          name: 'linux',
        },
        {
          img: '/app-images/SkillLogo/redmine.jpg',
          name: 'redmine',
        },
        {
          img: '/app-images/SkillLogo/scrum.jpg',
          name: 'scrum',
        },
        {
          img: '/app-images/SkillLogo/3g.jpg',
          name: '3g',
        },
        {
          img: '/app-images/SkillLogo/4g.jpg',
          name: '4g',
        },
        {
          img: '/app-images/SkillLogo/lte.jpg',
          name: 'lte',
        },
      ],
      showExp: false,
      expData: {},
    };
  },
  components: {
    Header,
    Skills,
    SkillCloseUp,
    Experience,
    ExpCloseUp,
    Passions,
  },
  computed: {
    closeUpForSkill() {
      return this.showSkill;
    },
    skillCloseUpData() {
      return this.skills[Math.abs(this.skillIndex) % this.skills.length];
    },
    closeUpForExp() {
      return this.showExp;
    },
    expCloseUpData() {
      return this.expData;
    },
  },
  methods: {
    openSkill(skillIndex) {
      this.skillIndex = skillIndex;
      this.showSkill = true;
    },
    closeSkill() {
      this.showSkill = false;
    },
    openExp(expData) {
      this.expData = expData;
      this.showExp = true;
    },
    closeExp() {
      this.showExp = false;
    },
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
