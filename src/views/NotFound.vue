<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">404</h1>
                <p class="fs-3"> <span class="text-danger">Opps!</span> Страница не найдена</p>
                <p class="lead">
                    Данной страницы не существует
                  </p>
                <a @click="$router.push('/')" class="btn btn-primary">Go Home</a>
            </div>
        </div>
</template>

<script>


export default {
  name: 'notFoundComponent',
  components: {
    
  }
}
</script>