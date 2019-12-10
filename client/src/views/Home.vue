<template>
  <div class="home container">
      <div class="landing-inner">
        <h1 class="x-large countdown-header">Holiday Countdown</h1>
        <div class="row align-items-start flexWrap-inherit">
          <div class="col">
            <div class="card">
              <span id="days" class="text-center"></span><br>
              <p class="text-center">Days</p>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <span id="hours" class="text-center"></span><br>
              <p class="text-center">Hours</p>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <span id="minutes" class="text-center"></span><br>
              <p class="text-center">Minutes</p>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <span id="seconds" class="text-center"></span><br>
              <p class="text-center">Seconds</p>
            </div>
          </div>
        </div>
        <p class="lead">Set up a user profile and create lists</p>
        <div class="buttons">
          <router-link to="register" class="btn btn-primary">Sign Up</router-link>
          <router-link to="login" class="btn btn-primary">Login</router-link>
          <!-- <a href="register" class="btn btn-primary">Sign Up</a>
          <a href="login" class="btn btn-primary">Login</a> -->
        </div>
      </div>
      <!-- <section class="landing">
      <div class="snow layer1 a"></div>
      <div class="snow layer1"></div>
      <div class="snow layer2 a"></div>
      <div class="snow layer2"></div>
      <div class="snow layer3 a"></div>
      <div class="snow layer3"></div>
      
      <div>
        <div class="landing-inner">
        <h1 class="x-large countdown-header">Holiday Countdown</h1>
        <div class="row align-items-start flexWrap-inherit">
          <div class="col">
            <div class="card">
              <span id="days" class="text-center"></span><br>
              <p class="text-center">Days</p>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <span id="hours" class="text-center"></span><br>
              <p class="text-center">Hours</p>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <span id="minutes" class="text-center"></span><br>
              <p class="text-center">Minutes</p>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <span id="seconds" class="text-center"></span><br>
              <p class="text-center">Seconds</p>
            </div>
          </div>
        </div>
        <p class="lead">Set up a user profile and create lists</p>
        <div class="buttons">
          <a href="register" class="btn btn-primary">Sign Up</a>
          <a href="login" class="btn btn-primary">Login</a>
        </div>
      </div>
      </div>
    </section> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  created() {
    this.handleCountdownTimer()
  },
  methods: {
    handleCountdownTimer() {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      let countdown = new Date('Dec 25, 2019 00:00:00').getTime();
      setInterval(function() {
      let now = new Date().getTime(),
            distance = countdown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / (second));
    }, second)
    }
  },
  components: {
    
  }
}
</script>
<style lang="scss">
.home {
  height: 100vh;

  h1 {
    text-align: center;
    font-size: 4rem;
  }

  .flexWrap-inherit {
    margin: 4rem auto;
  }

  .card {
    // background-color: #96c3da;
    width: 100%;
    box-shadow: 0;
    background-color: transparent; 
  }

  #days, #hours, #minutes, #seconds {
    color: #F4F2F3;
    font-size: 1.5rem;
  }

  span, p {
    color: #F4F2F3;
    text-align: center;
  }
  .buttons {
    text-align: center;
    
    a {
      margin: 1rem;
    }

  }

}

</style>
