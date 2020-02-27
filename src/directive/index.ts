import Vue from 'vue';

Vue.directive('keeper-scroll', {
  inserted: (el, binding) => {
    const handler = (e: any) => {
      if (binding.value(e, el)) {
        window.removeEventListener('scroll', handler);
      }
    };
    window.addEventListener('scroll', handler);
  },
});
