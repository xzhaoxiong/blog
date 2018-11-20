<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">login</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "./assets/base.scss";
  html,body,#app {height: 100%; background: white;}
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(8px);
    opacity: 0;
  }
</style>
