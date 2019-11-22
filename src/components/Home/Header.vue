<template>
  <div class="header">
    <div class="slider-arrow-left"
      @click="previousSkill">&#171;</div>
    <div class="slider">
      <transition-group name="fade" tag="div">
        <div v-for="index in [currentIndex]"
          :key="index" class="slider-item"
          @click="skillCloseUp(index)">
          <img :src="pickedSkill.img"
            class="slider-img"/>
          <p>{{ pickedSkill.name }}</p>
        </div>
      </transition-group>
    </div>
    <div class="slider-arrow-right"
      @click="nextSkill">&#187;</div>
    <div class="description">
      <p>Got 5 minutes? Head down for full story...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['skills'],
  data() {
    return {
      currentIndex: 0,
    };
  },
  mounted() {
    this.startSlide();
  },
  computed: {
    pickedSkill() {
      return this.skills[Math.abs(this.currentIndex) % this.skills.length];
    },
  },
  methods: {
    startSlide() {
      setInterval(this.nextSkill, 4000);
    },
    previousSkill() {
      this.currentIndex -= 1;
      console.log(this.currentIndex);
    },
    nextSkill() {
      this.currentIndex += 1;
      console.log(this.currentIndex);
    },
    skillCloseUp(skillIndex) {
      this.$emit('skill-open', skillIndex);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/styles/_variables.scss';

.header {
  height: 100vh;
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  grid-template-rows: 80vh 20vh;
  grid-template-areas:
    "leftslidearrow slider rightslidearrow"
    "description description description";
  box-sizing: border-box;
  align-items: center;
}

.header p {
  padding: 0;
  margin: 0;
}

.slider {
  grid-area: slider;
  justify-content: center;
  font-weight: bold;
}

.slider p {
  font-size: calc(7px + 2vmin);
  text-transform: uppercase;
}

.fade-enter-active {
  transition: all 0.9s ease-in-out !important;
  overflow: hidden;
  visibility: visible !important;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  transition: all 0s ease !important;
  visibility: hidden;
  opacity: 0;
}

.slider-arrow-left {
  grid-area: leftslidearrow;
}

.slider-arrow-left:hover {
  cursor: pointer;
  opacity: .5;
}

.slider-arrow-right {
  grid-area: rightslidearrow;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
}

.slider-arrow-right:hover {
  cursor: pointer;
  opacity: .5;
}

.slider-item {
  cursor: pointer;
}

.slider-img {
  height: calc(20px + 34vmin);
  width: calc(20px + 34vmin);
  border-radius: 50%;
}

.description {
  grid-area: description;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  font-size: 150%;
  font-weight: bold;
  position: -webkit-sticky;
  position: sticky;
  top: $top-nav-height;
}

.description p {
  font-size: calc(8px + 2vmin);
}
</style>
