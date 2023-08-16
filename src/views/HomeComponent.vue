<template>
  <div class="home">
    <div class="w-25 mx-auto border p-3" style="margin-top: 15%">
      <form v-if="!getAuth" @submit.prevent="login">
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
        v-if="getAuth" @click="login">Выйти
      </vue-btn>
    </div>
  </div>
</template>

<script>
import vueBtn from '@/components/UI/myButton.vue'
import { mapMutations, mapGetters } from "vuex"

export default {
  name: 'HomeComponent',
  components: {
    vueBtn
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapMutations({
            setAuth: 'setAuth',
        }),
        login() {
          this.$store.dispatch('login');
          this.$router.push({path: '/tasklist'});
        }
  },
  computed: {
        ...mapGetters({
          getAuth: 'getAuth'
        }),
    }
}
</script>
<style scoped>

</style>
