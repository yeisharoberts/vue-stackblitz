<template>
  <div class="parent-component">
    <div class="comp-body">Name: {{ name }} | Age: {{ age }}</div>
  </div>
  <button type="button" @click="$emit('increaseBy', 1)">Click me</button>
</template>

<script>
export default {
  emits: ['increaseBy'],
  methods: {
    increaseCounter() {
      this.$emit('increaseBy', 1);
    },
    handleIncrease(value) {
      count = value;
    }
  },
  props: {
    name: String,
    age: Number,
  },
};
</script>

<style scoped>
.parent-component {
  margin-top: 10px;
}

.comp-body {
  margin: 20px;
  padding: 10px;
  width: 300px;
  border: 2px solid gray;
}
</style>
