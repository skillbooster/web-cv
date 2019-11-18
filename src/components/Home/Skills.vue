<template>
  <div id="skills-area">
    <p id="skills-list-title">Skills gathered so far</p>
    <ul id="skills-list">
      <li v-for="skill in skills"
        :key="skill.name"
        class="skill-item">
        <img :src="skill.img" class="skill-img">
        <p>{{ skill.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['skills'],
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#skill-area {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#skills-list-title {
  font-size: calc(12px + 2vmin);
  font-weight: bold;
  color: rgb(66, 114, 62);
}

#skills-list {
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
}

.skill-item:active {
  background-color: none;
}

.skill-item:focus {
  background-color: none;
}

.skill-item:hover {
  transform: scale(1.2);
  color: rgb(66, 114, 62);
}

.skill-item:hover .skill-img{
  border: 3px solid  rgb(66, 114, 62);
}

.skill-img {
  height: calc(2px + 14vmin);
  width: calc(2px + 14vmin);
  border-radius: 50%;
  margin-bottom: 4px;
  border: 3px solid white;
}
</style>
