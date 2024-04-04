import "./style.css";

import { createApp } from "vue";
import App from "./App.vue";
import vue3GoogleLogin from "vue3-google-login";

import router from "./router";

const app = createApp(App);
console.log("UNGABUGNA");
console.log(process.env);
console.log(import.meta.env);
console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID);
console.log(process.env.VUE_APP_ENV_VARIABLE);
console.log(process.env.VITE_GOOGLE_CLIENT_ID);
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID ?? process.env.VUE_APP_ENV_VARIABLE;
app.use(vue3GoogleLogin, {
    clientId: clientId
})
app.use(router);
app.mount("#app");
