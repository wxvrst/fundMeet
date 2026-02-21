import "./styles/style.css";
import App from "./App.vue";
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'
import { router } from './providers'
import 'vue-final-modal/style.css'
import piniaPluginPersistedsate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedsate);

const vfm = createVfm()

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(vfm)

export { app };