<template>
    <div class="profile container">
        <div class="row">
            <div class="card md-auto">
                <div class="card-header text-white bg-primary">
                    <img src="https://avatars.dicebear.com/v2/male/3.svg?options[mood][]=happy" width="60" alt="" class="round-img" id="profile-img"><h4>{{ user.username }}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">Email: {{ user.email }}</li>
                        <li class="list-group-item">Username: {{ user.username }}</li>
                        <li class="list-group-item">Name: {{ user.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    computed:mapGetters(['user']),
    methods: {
        ...mapActions(['getProfile'])
    },
    created() {
        this.getProfile();
    },
}
</script>

<style lang="scss">
@import '../styles/main.scss';
.profile {
    height: 100%;

    .card {
    width: 60%;
    border-radius: 0;
    margin: 8rem auto;
    }
    .btn {
    border-radius: 0;
    }
    .form-control {
    border-radius: 0;
    }

}
</style>