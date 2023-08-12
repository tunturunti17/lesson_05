<template>
  <div class="home">
    <div class="w-25 mx-auto border p-3" style="margin-top: 15%">
      <form v-if="!auth" @submit.prevent="login">
        <div class="mb-3">
          <label class="form-label" for="username">Логин:</label>
          <input class="form-control" v-model="username" type="text" id="username" placeholder="Логин...">
        </div>
        <div class="mb-3">
          <label class="form-label" for="password">Пароль:</label>
          <input class="form-control" v-model="password" type="password" id="password" placeholder="Пароль...">
        </div>
        <vue-btn type="submit"
          class="btn btn-primary">Войти
        </vue-btn>
      </form>
      <vue-btn class="btn btn-primary"
        v-if="auth" @click="login">Выйти
      </vue-btn>
    </div>
  </div>
</template>

<script>
import vueBtn from '@/components/UI/myButton.vue'
import axios from "axios"

export default {
  name: 'HomeComponent',
  components: {
    vueBtn
  },
  data() {
    return {
      auth: false,
    };
  },
  created() {
    this.getAuth();
  },
  methods: {
    async login() {
      try {
        await axios.patch(`${`http://localhost:3000/auth`}`, {
          auth: !this.auth,
        });
        this.auth = !this.auth;
      } catch (error) {
        console.error(error);
      }
      await this.$router.push({ path: "/tasklist" });
    },
    async getAuth() {
      try {
        const res = await axios.get(`http://localhost:3000/auth`);
        this.auth = res.data.auth;
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>
<style scoped>

</style>
