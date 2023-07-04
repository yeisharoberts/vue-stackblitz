<template>
  <div id="app">
    <Navbar msg="Welcome to Your Vue.js App" />
    <Component v-for="item in array" :name="item.name" :age="item.age" />
    <ButtonInc @increaseBy="handleIncrease" btnText="Click Me" />
    <div>{{ count }}</div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Component from './components/Component.vue';
import ButtonInc from './components/ButtonInc.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Component,
    ButtonInc,
  },
  methods: {
    handleIncrease(value) {
      this.count += value;
    },
  },
  data() {
    return {
      test: 'testing',
      array: [
        { name: 'P1', age: 60 },
        { name: 'P2', age: 70 },
      ],
      count: 0,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
</style>
