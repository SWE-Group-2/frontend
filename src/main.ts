import "./style.css";

import { createApp } from "vue";
import App from "./App.vue";
import vue3GoogleLogin from "vue3-google-login";

import router from "./router";

const app = createApp(App);
console.log(import.meta.env);
console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID);
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
app.use(vue3GoogleLogin, {
    clientId: clientId
})
app.use(router);
app.mount("#app");
