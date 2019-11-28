<template>
  <div id="passions-area">
    <p id="passions-list-title">Passions</p>
    <div id="passions-list">
      <div v-for="pas in passions"
        :key="pas.name"
        class="passion-item"
        @mouseover="passionItemHover($event, pas.img_end)"
        @mouseleave="passionItemHover($event, pas.img_start)"
        :style="{background: backgroundImage(pas.img_start)}">
        <p>{{ pas.name }}</p>
        <p>{{ pas.reason }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Passions',
  data() {
    return {
      passions: [
        {
          name: 'Martial Arts',
          reason: 'Excitement and challenge',
          img_start: '/app-images/Passions/muaythai_small.jpg',
          img_end: '/app-images/Passions/warrior_small.jpg',
        },
        {
          name: 'Climbing',
          reason: 'Danger and extreme',
          img_start: '/app-images/Passions/climbing_canyon_small.jpg',
          img_end: '/app-images/Passions/climbing1_small.jpg',
        },
      ],
    };
  },
  methods: {
    backgroundImage(imgUrl) {
      return `radial-gradient(circle, transparent, black),
        url(${imgUrl})`;
    },
    passionItemHover(e, imgUrl) {
      if (e.target.classList.contains('passion-item')) {
        e.target.style.background = this.backgroundImage(imgUrl);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#passions-area {
  width: 100%;
  padding: 0;
  margin: 0;
}

#passions-list-title {
  font-size: calc(12px + 2vmin);
  font-weight: bold;
  color: rgb(49, 48, 48);
}

#passions-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.passion-item {
  width: 60vw;
  height: 150px;
  border-radius: 10px;
  margin-bottom: 5px;
  font-weight: bold;
  color: white;
  text-align: start;
  transition: .3s;
}

.passion-item:hover {
  opacity: .8;
}

.passion-item p {
  padding: 0;
  margin: 0;
  width: 90%;
}

$passion-item-text-margin-left: 20px;

.passion-item p:first-child{
  margin: 35px 0 0 $passion-item-text-margin-left;
  font-size: calc(12px + 2vmin);
}

.passion-item p:last-child{
  margin-left: $passion-item-text-margin-left;
  font-size: calc(4px + 2vmin);
  opacity: .7;
}
</style>
