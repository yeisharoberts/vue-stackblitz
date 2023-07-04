<script>
export default {
  emits: ['increaseBy'],
  methods: {
    increaseCounter() {
      this.$emit('increaseBy', 1);
    },
    handleIncrease(value) {
      count += value;
    },
  },
  props: {
    btnText: {
      type: String,
      default: 'Default Click Me',
    },
  },
};
</script>

<template>
  <div class="parent-button">
    <button type="button" @click="$emit('increaseBy', 1)">{{ btnText }}</button>
  </div>
</template>

<style></style>
