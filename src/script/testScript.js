import Component from '../components/Component.vue';

export default {
  components: {
    Component,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      message: 'Hello world',
    };
  },
};
