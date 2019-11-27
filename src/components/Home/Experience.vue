<template>
  <div id="experience-area">
    <p id="experience-list-title">Experience</p>
    <ul id="exp-list">
      <li v-for="exp in expList"
        :key="exp.name"
        class="exp-item"
        @click="expCloseUp(exp)">
        <img :src="exp.logo" class="exp-img">
        <p>{{ exp.name }}</p>
        <p>{{ exp.exp }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      expList: [
        {
          name: 'Orange',
          logo: '/app-images/CompanyLogo/OrangeLogo.jpg',
          exp: '3 months',
          description: `Creating a newest at
           the time EM waves propagation model`,
          skillsList: ['Telecomunication', 'Excel', 'Basic'],
        },
        {
          name: 'Nokia',
          logo: '/app-images/CompanyLogo/NokiaLogo.jpg',
          exp: '4 years',
          description: `2 years - Poland - software development,
            code delivery/C++, 3 levels of testing UT/C++ (Unit Tests),
            SCT/TTCN3 (System Component Tests), PIT/TTCN3 (All Components Tests),
            Estimating and entry design for upcoming features (SME role),
            Conducting and leading cross components feature meetings.
            2 years - China - Coaching and Leading a 70 people group of
            developers. Teaching them: C++, TTCN3, Linux environment,
            Design patterns, Project structure and methodologies,
            JenkinsCI, GIT, TDD, Agile(SCRUM/Train)`,
          skillsList: ['C++', 'TTCN3', 'Telecomunication',
            '4G', 'Subject Matter Expert(SME)',
            'Design Patterns', 'GIT', 'SVN',
            'TDD'],
        },
        {
          name: 'WebDev',
          logo: '/app-images/CompanyLogo/WebDevLogo.jpg',
          exp: '1 year',
          description: `11 months - Many small projects,
            Full stack development of Entrepreneur project`,
          skillsList: ['HTML', 'JavaScript', 'CSS',
            'VueJs', 'PHP', 'NodeJs', 'MongoDB',
            'MySQL', 'UI/UX Design', 'Bootstrap',
            'jQuery', 'GIT/GitHub'],
        },
      ],
    };
  },
  methods: {
    expCloseUp(expData) {
      this.$emit('exp-open', expData);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$exp-color: rgb(155, 87, 211);

#experience-area {
  min-height: 300px;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#experience-list-title {
  font-size: calc(12px + 2vmin);
  font-weight: bold;
  color: $exp-color;
}

#exp-list {
  min-height: 200px;
  list-style: none;
  padding: 0;
  margin: 0;
}

#exp-list p{
  font-size: calc(4px + 2vmin);
  font-weight: bold;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}

.exp-item {
  cursor: pointer;
  transition: .3s;
  display: inline-block;
  justify-content: space-around;
  margin: 0 4px 4px 4px;
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
}

.exp-item:active {
  background-color: none;
}

.exp-item:focus {
  background-color: none;
}

.exp-item:hover {
  transform: scale(1.2);
  color: $exp-color;
}

.exp-item:hover .exp-img{
  border: 2px solid $exp-color;
}

.exp-img {
  height: calc(2px + 14vmin);
  width: calc(2px + 14vmin);
  margin-bottom: 4px;
  border: 2px solid white;
}
</style>
