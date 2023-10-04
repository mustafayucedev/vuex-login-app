<script>
    import { mapActions , mapGetters } from 'vuex';

    export default {
        methods: {
            ...mapActions(["updateLogout"]),
            logout(){
                this.updateLogout()
            }
        },
        computed: {
            ...mapGetters(["getIsLogin"])
        }
    }
</script>

<template>
    <div v-if="getIsLogin">
        <button class="button logout" type="submit" @click="logout">Logout</button>
    </div>
</template>