<template>
  <div id="passions-area">
    <div id="passions-box">
      <video autoplay loop muted poster="/app-images/CodeSnippets/VueJs.jpg" id="background">
        <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Passions',
  data() {
    return {
    };
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

#passions-box {
  width: 100%;
}

#background {
  width: 100%;
  height: 320px;
  z-index: -100;
  background: black no-repeat;
  background-size: cover;
  opacity: .5;
}
</style>
