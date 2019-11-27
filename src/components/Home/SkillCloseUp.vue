<template>
  <div :class="backgroundClass"
    @click="closeEventCloseUp">
    <div class="modal-content animate">
      <div id="skill-pic-area">
        <img :src='skillData.img' alt='IMAGE'
          class='closeup-img'>
      </div>
      <div @click="closeEvent"
        class="close">Close</div>
      <p class="about-skill">{{ skillData.name }}</p>
      <div class="example">
        <img v-if='skillData.codeSnippet' :src='skillData.codeSnippet'
          alt="example">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['skillData'],
  data() {
    return {
      backgroundClass: 'popUpModalBack',
    };
  },
  methods: {
    closeEvent() {
      this.$emit('skill-close');
    },
    closeEventCloseUp(event) {
      if (event.target.classList.contains(this.backgroundClass)) {
        this.closeEvent();
      }
    },
  },
});
</script>

<style scoped lang="scss">
.popUpModalBack {
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
  padding-top: 30px;
}

.modal-content {
  background-color: #fefefe;
  margin: 4% auto 15% auto;
  border: calc(.5px + .5vmin) solid #888;
  border-radius: 10px;
  width: 98%;
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: calc(3px + 2vmin) calc(20px + 34vmin) 50px 1fr;
  grid-template-areas:
    "close"
    "skillimage"
    "about"
    "example";
}

/* Add Zoom Animation */
.animate {
  animation: zoom 0.4s
}

@keyframes zoom {
  from {transform: scale(0)}
  to {transform: scale(1)}
}

.close {
  grid-area: close;
  align-items: end;
  cursor: pointer;
  font-size: calc(3px + 2vmin);
}

.close:hover {
  background-color: black;
  color: white;
  opacity: .5;
  border-radius: 8px 8px 0 0;
  justify-content: center;
  align-items: center;
}

.close p{
  padding: 0;
  margin: 0;
}

#skill-pic-area {
  grid-area: skillimage;
}

.closeup-img {
  height: calc(20px + 34vmin - 4px);
  width: calc(20px + 34vmin - 4px);
  margin: 2px 0 2px 0;
  border-radius: 50%;
}

.about-skill {
  grid-area: about;
  text-transform: uppercase;
  font-weight: bold;
}

.example {
  grid-area: example;

  img {
    height: calc(30px + 34vmin - 4px);
  }
}
</style>
