import { createStore } from "vuex";

const store = createStore({
    state: {
        username: "admin",
        password: "admin",
        isLogin: false,
        loginMessage: false
    },
    getters: {
        getIsLogin(state){
            return state.isLogin
        },
        getLoginMessage(state){
            return state.loginMessage
        }
    },
    actions: {
        updateLogin({commit}, [username,password]){
            commit("setLogin", [username,password])
        },
        updateLogout({commit}){
            commit("logout")
        }
    },
    mutations: {
        setLogin(state, [username,password]){
            if(state.username == username && state.password == password){
                state.isLogin = true,
                state.loginMessage = false
            }
            else {
                state.isLogin = false,
                state.loginMessage = true
            }
        },
        logout(state){
            state.isLogin = false
        }
    }
})

export default store