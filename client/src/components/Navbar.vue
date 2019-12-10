<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">Holiday Countdown</router-link> 
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <router-link to="/" class="nav-link">
                    Home
                <span class="sr-only">(current)</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
                <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
                <router-link to="/register" class="nav-link">Register</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
                <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
                <router-link to="/profile" class="nav-link">Profile</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
                <a to="/logout" class="nav-link" @click="logoutUser">Logout</a>
            </li>
            </ul>
            
        </div>
    </nav>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters(["isLoggedIn"])
    },
    methods: {
        ...mapActions(['logout']),
        logoutUser() {
            this.logout();
        }
    },
}
</script>
<style lang="scss">
// .navbar {
//     background: radial-gradient(farthest-corner at 30vw 20vh,#7397a1 1%,#3f2c41 100%);
//     opacity: 0.9;
// }   
</style>