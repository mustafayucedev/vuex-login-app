<script>
import { mapActions , mapGetters } from 'vuex';
export default {
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        ...mapActions(["updateLogin"]),
        login() {
            this.updateLogin([this.username, this.password])
        }
    },
    computed: {
        ...mapGetters(["getIsLogin"])
    }
}
</script>

<template>
    <div class="login" v-if="!getIsLogin">
        <div class="mb-15">
            <label for="">Username</label>
            <input type="text" placeholder="Enter Username.." v-model="username">
        </div>
        <div>
            <label for="">Password</label>
            <input type="password" placeholder="Enter Password.." v-model="password">
        </div>
        <button type="submit" @click="login">Login</button>
    </div>
</template>