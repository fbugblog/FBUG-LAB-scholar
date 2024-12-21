import { createApp } from "vue";
import "./index.css";
import App from "@/App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import router from "./router_index";

createApp(App)
  // vue router
  .use(router)
  // component framework Prime vue
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .mount("#app");
