export default {
    beforeMount: (el, bindings) => {
      el.style.color = bindings.value;
    },
  };