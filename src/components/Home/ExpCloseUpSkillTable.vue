<template>
  <div>
    <table class="table table-hover">
      <thead id="exp-skills-table-head">
        <tr>
          <td>Skill used</td>
        </tr>
      </thead>
      <tbody id="exp-skills-table-body">
        <tr v-for="skill in expSkillList"
          :key="skill">
          <td>{{ skill }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['expSkillList'],
  data() {
    return {
    };
  },
});
</script>

<style scoped lang="scss">
#exp-skills-table-head {
  font-weight: bold;
}
</style>
