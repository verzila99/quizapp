import "primevue/resources/primevue.min.css";
import "./bootstrap";
import "../css/app.css";

import "primevue/resources/themes/saga-blue/theme.css";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import ToastService from "primevue/toastservice";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Quizzes";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob(["./Pages/**/*.vue", "./images/**/*.jpg"])
        ),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(PrimeVue)
            .use(ToastService)
            .mount(el);
    },
});
InertiaProgress.init({ color: "#4B5563" });