import { h } from "vue";
import Vcolor from "@/components/directives/Vcolor";
import Vmousemove from "@/components/directives/Vmousemove";

export default {
  install: (app) => {
    app.directive("color", Vcolor);
    app.directive("mousemove", Vmousemove);
    app.component("todo-render-button", {
      data() {
        return {
          tag: "button",
          tags: ["button", "div", "h1", "span"],
        };
      },
      render() {
        return h(this.tag, {
          class: "btn btn-info",
          innerHTML: "change Tag",
          onClick: this.changeTag,
        });
      },
      methods: {
        changeTag() {
          this.tag = this.tags[Math.floor(Math.random() * this.tags.length)];
        },
      },
    });
  },
};