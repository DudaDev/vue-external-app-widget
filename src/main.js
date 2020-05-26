import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

let app;

export function init ({ containerId, container, props }) {
  const parent = container || document.getElementById(containerId);
  app = new Vue({
    render: h => h(App, { props: props.dudaConfig }),
  }).$mount()

  parent.appendChild(app.$el);
}

export function clean () {
  app.$destroy();
}

if (process.env.NODE_ENV === "development") {
  init ({
    containerId: 'app',
    props: {
      dudaConfig: {
        headline: 'External Apps are Awesome',
        element: 'h1'
      }
    }
  });
}
