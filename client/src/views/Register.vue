<template>
  <div class="register container">
      <div class="row">
        <div class="card mx-auto">
          <div class="card-header text-white bg-primary">
            <h4>Register</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="registerUser">
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
                <label for="name">Name</label>
                <input 
                  type="text" 
                  placeholder="Name" 
                  name="name" 
                  v-model="name" 
                  id="name" 
                  class="form-control"
                >
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="text" 
                  placeholder="Email" 
                  name="email" 
                  v-model="email" 
                  id="email" 
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
              <div class="form-group">
                <label for="confirm_password">Confirm Password</label>
                <input 
                  type="password" 
                  class="form-control" 
                  placeholder="Confirm Password" 
                  name="confirm_password" 
                  id="confirm_password" 
                  v-model="confirm_password"
                >
              </div>
              <input type="submit" value="Register" class="btn btn-primary" />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <router-link to="/login" class="card-link">Already have an account?</router-link>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
      name: "",
      email: ""
    }
  },
  methods: {
    ...mapActions(['register']),
    registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name
      };
      this.register(user)
      .then(res => {
        //console.log(res)
        if(res.data.success) {
          this.$router.push("/login")
        }
      });
    }
  },
}
</script>

<style lang="scss">
.register {
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