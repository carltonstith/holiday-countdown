<template>
  <div class="login container">
      <div class="row">
        <div class="card mx-auto">
          <div class="card-header text-white bg-primary">
            <h4>Login</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="loginUser">
              <div class="form-group">
                <label for="username">Username</label>
                <input 
                  type="text" 
                  placeholder="Username" 
                  name="username" 
                  v-model="username" 
                  id="username" 
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input 
                  type="password" 
                  class="form-control" 
                  placeholder="Password" 
                  name="password" 
                  id="password" 
                  v-model="password"
                >
              </div>
              <input type="submit" value="Login" class="btn btn-primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <router-link to="/register" class="card-link">Need an account?</router-link>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    ...mapActions(['login']),
    loginUser() {
      /* eslint-disable no-console */
      console.log(this.username, this.password)
      /* eslint-enable no-console */
      let user = {
        username: this.username,
        password: this.password
      };
      this.login(user)
      .then(res => {
        if(res.data.success) {
          this.$router.push('/dashboard');
        }
      }).catch(err => {
        /* eslint-disable no-console */
        console.log(err)
        /* eslint-enable no-console */ 
      });
    }
  }
}
</script>

<style lang="scss">
.login {
  height: 100vh;

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