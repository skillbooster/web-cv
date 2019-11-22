<template>
  <div class="contact">
    <h1>Leave a mark</h1>
    <div class="card-body">
      <form v-on:submit.prevent="addContact">
        <div class="form-group">
          <label>Company or private name:</label>
          <input type="text" class="form-control" v-model="contact.name"/>
        </div>
        <div class="form-group">
          <label>Contact e-mail address:</label>
          <input type="text" class="form-control" v-model="contact.mail"/>
        </div>
        <div class="form-group">
          <label>Remarks:</label>
          <input type="text" class="form-control" v-model="contact.offer"/>
        </div>
        <div class="form-group">
          <input type="submit" class="btn btn-primary" value="Add Contact"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      contact: {},
    };
  },
  methods: {
    addContact() {
      this.contact.date = new Date().getDate();
      const uri = 'http://localhost:4000/contacts/add';
      this.axios.post(uri, this.contact).then(response => console.log(response.data));
    },
  },
});
</script>

<style lang="scss" scoped>

</style>
