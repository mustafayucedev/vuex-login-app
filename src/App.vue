<script>
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'
import Message from './components/Message.vue';

export default {
  components: {
    Login,
    Logout,
    Message,
  }
}
</script>

<template>
  <div class="container">
    <Login />
    <Logout />
    <Message />
  </div>
</template>