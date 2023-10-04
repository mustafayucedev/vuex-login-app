<script>
import { mapGetters } from 'vuex';

  export default {
    computed: {
        ...mapGetters(["getIsLogin","getLoginMessage"])
    }
  }
</script>

<template>
    <div class="alert-danger" v-if="getLoginMessage">
        Username and/or password incorrect!
    </div>
    <div class="alert-succsess" v-if="getIsLogin">
        Login successfully..
    </div>
</template>