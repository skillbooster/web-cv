<template>
    <nav id="top-nav">
      <div class="theme">
        <p id="pagename">{{ pickedPage }}</p>
      </div>
      <ul class="top-nav-links"
        :class="{ 'top-nav-links-active': isTopNavActive }">
        <li @click="pagePick($event)">
          <router-link to="/"
            class="router-link">Skills</router-link>
        </li>
        <li @click="pagePick($event)">
          <router-link :to="{ name: 'contact' }"
            class="router-link">Leave a mark</router-link>
        </li>
        <li @click="pagePick($event)">
          <router-link :to="{ name: 'contactsList' }"
            class="router-link">Contacts List</router-link>
        </li>
      </ul>
      <div class="burger"
        :class = "{ 'burgerToggle': isTopNavActive }"
        @click="navSlide">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TopNav',
  data() {
    return {
      isTopNavActive: false,
      pickedPage: 'Main',
    };
  },
  created() {
  },
  methods: {
    pagePick(e) {
      if (e.target.classList.contains('router-link')) {
        this.pickedPage = e.target.innerHTML;
      }
    },
    navAppear() {
      this.isTopNavActive = !this.isTopNavActive;
    },
    navLinksAnimation() {
      const navLinks = document.querySelectorAll('.top-nav-links li');
      navLinks.forEach((link) => {
        link.classList.toggle('top-nav-links-fade-in');
      });
    },
    navSlide() {
      this.navAppear();
      this.navLinksAnimation();
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/_variables.scss';

#top-nav {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: $top-nav-height;
  background-color: $top-nav-backgroud-color;
  margin: 0px;
  padding: 0px;
  z-index: 999;
}

.theme {
  color: $top-nav-color;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20px;
}

.theme p {
  padding: 0px;
  margin: 0px;
}

.top-nav-links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  color: $top-nav-color;
  padding: 0px;
  margin: 0px;
}

.top-nav-links li {
  list-style: none;
}

.top-nav-links .router-link {
  color: $top-nav-color;
  text-decoration: none;
  font-size: calc(1px + 2vmin);
  font-weight: bold;
  letter-spacing: 2px;
}

.burger {
  display: none;
}

.burger div {
  width: 25px;
  height: 2px;
  background-color: $top-nav-color;
  margin: 4px;
  transition: all .5s ease-in-out;
}

@media screen and (max-width: 1024px) {
  .top-nav-links {
    width: 60%;
  }
}

@media screen and (max-width: 768px) {
  body {
    overflow-x: auto;
  }

  .top-nav-links {
    position: fixed;
    right: 0;
    height: $top-nav-side-height;
    top: $top-nav-height;
    background-color: $top-nav-backgroud-color;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    transform: translateX(100%);
    transition: transform .5s ease-in-out;
  }

  .top-nav-links li {
    opacity: 0;
  }

  .burger {
    display: block;
    cursor: pointer;
  }
}

.burgerToggle .line1 {
  transform: rotate(-45deg) translate(-4px, 5px);
}

.burgerToggle .line2 {
  opacity: 0;
}

.burgerToggle .line3 {
  transform: rotate(45deg) translate(-4px, -5px);
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.top-nav-links-active {
  transform: translateX(0%);
}

.top-nav-links-fade-in {
  animation: navLinkFade .5s ease forwards .5s;
}

.router-link {
  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
