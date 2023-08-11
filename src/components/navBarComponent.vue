<template>
    <nav class="navbar navbar-dark bg-dark">
    <div>
        <ul class="navbar-nav">
          <router-link to="/" custom v-slot="{ navigate }" active-class="active">
            <li class="nav-item">
              <button class="navbar-toggler nav-item nav-link" @click="navigate">
                  Home
              </button>
            </li>
          </router-link>
          <router-link to="/about" custom v-slot="{ navigate }" active-class="active">
            <li class="nav-item">
              <button class="navbar-toggler nav-item nav-link" @click="navigate">
                About
              </button>
            </li>
          </router-link>
          <router-link v-show="!auth" to="/tasklist" custom v-slot="{ navigate }" active-class="active">
            <li class="nav-item">
              <button class="navbar-toggler nav-item nav-link" @click="navigate">
                Task List
              </button>
            </li>
          </router-link>
        </ul>
    </div>
  </nav>
</template>

<script>


export default {
  name: 'navBarComponent',
  props: {
    auth: {
      type: Boolean
    }
  },
}
</script>

<style scoped>
.navbar-nav {
    flex-direction: row;
    gap: 20px;
}
</style>