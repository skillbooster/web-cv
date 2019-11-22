<template>
  <div id="skills-area">
    <p id="skills-list-title">Skills gathered so far</p>
    <ul id="skills-list">
      <li v-for="(skill, index) in skills"
        :key="skill.name"
        class="skill-item"
        @click="skillCloseUp(index)">
        <img :src="skill.img" class="skill-img">
        <p>{{ skill.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  props: ['skills'],
  data() {
    return {
    };
  },
  methods: {
    skillCloseUp(skillIndex) {
      this.$emit('skill-open', skillIndex);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$skills-color: rgb(66, 114, 62);

#skill-area {
  min-height: 500px;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#skills-list-title {
  font-size: calc(12px + 2vmin);
  font-weight: bold;
  color: $skills-color;
}

#skills-list {
  min-height: 200px;
  list-style: none;
  padding: 0;
  margin: 0;
}

#skills-list p{
  font-size: calc(4px + 2vmin);
  font-weight: bold;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}

.skill-item {
  cursor: pointer;
  transition: .3s;
  display: inline-block;
  justify-content: space-around;
  margin: 0 4px 4px 4px;
  top: 50px;
}

.skill-item:hover {
  transform: scale(1.2);
  color: $skills-color;
}

.skill-item:hover .skill-img{
  border: 3px solid  $skills-color;
}

.skill-img {
  height: calc(2px + 14vmin);
  width: calc(2px + 14vmin);
  border-radius: 50%;
  margin-bottom: 4px;
  border: 3px solid white;
}
</style>
