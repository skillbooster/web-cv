<template>
  <div>
    <div id="contacts-list">
      <h1>Contacts</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Remark</td>
            <td>Date</td>
          </tr>
        </thead>

        <tbody>
          <tr v-for="contact in contacts" :key="contact._id">
              <td>{{ contact.name }}</td>
              <td>{{ contact.mail }}</td>
              <td>{{ contact.offer }}</td>
              <td>{{ contact.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      contacts: [],
    };
  },
  created() {
    this.fetchContacts();
  },
  methods: {
    fetchContacts() {
      const uri = 'http://localhost:4000/contacts/fetch';
      this.axios.get(uri).then((response) => {
        this.contacts = response.data;
      });
    },
  },
});
</script>

<style lang="scss" scoped>
#contacts-list {
  width: 100vw;
}

.table {
  font-size: calc(2px + 2vmin);
}

thead {
  font-weight: bold;
  font-size: calc(3px + 2vmin)
}
</style>
