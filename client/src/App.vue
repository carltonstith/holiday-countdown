<template>
  <div id="app">
    <Navbar />
    <transition name="view">
      <router-view/>
      <!-- <div class="container">
        <router-view/>
      </div> -->
    </transition>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar';

export default {  
  components: {
    Navbar
  }  
}
</script>
<style lang="scss">
// @import '@/styles/_main.scss';
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body {
  font-family: 'Raleway', sans-serif !important;
  //height: 100%;
}
h1 {
  color: #F4F2F3;
}
.countdown-header {
    font-family: 'Mountains of Christmas', cursive;
    margin: 6px 12px;
    color: #fff;
    text-shadow: 0 2px 0 rgba(0,0,0,.25);
    transform: rotateZ(-1deg) skew(-.9deg);
    font-weight: 400;
}
#app {
  position: relative;
  // background: url('./assets/skyscraper-silhouette.png') no-repeat center/cover;
  background-image: linear-gradient(to bottom, rgba(102,125,182, 0.52), rgba(5, 36, 251, 0.73), rgba(0,130,200,0.52)),
  url('./assets/skyscraper-silhouette.png');
  background-size: cover;
  // background-color: rgba(138, 187, 214, 0.9);
  height: 100%;
  
  &-inner {
        color: #F4F2F3;
        height: 100%;
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: auto;
        align-items: center;
        justify-items: center;
        justify-content: center;
        text-align: center;
    }
}

.view-enter-active, .view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease; 
}
.view-enter-active {
  transition-delay: 0.5s;
}
.view-enter, .view-leave-to {
  opacity: 0;
}
.view-enter-to, .view-leave {
  opacity: 1;
}
</style>
