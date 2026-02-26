import "./styles/style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "./providers";
import piniaPluginPersistedsate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedsate);

const app = createApp(App);

app.use(pinia);
app.use(router);

export { app };
