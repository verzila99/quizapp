<template>
    <div>
        <Dialog v-model:visible="dialog">
            <template #header class="flex justify-end">&nbsp; </template>
            Do you want to log in to save your statistics?
            <template #footer>
                <Button
                    @click="toLogin"
                    label="Log in"
                    icon="pi pi-sign-in"
                    class="p-button-sm p-button-help"
                />
                <Button
                    @click="toRegister"
                    label="Register"
                    icon="pi pi-user"
                    class="mx-4 p-button-sm p-button-success"
                />
                <div class="mt-3 text-blue-500">
                    <Button
                        @click="toCategoriesFromDialog"
                        label="Continue without registration"
                        class="p-button-link"
                    />
                </div>
            </template>
        </Dialog>
        <Navbar />
        <section
            :style="{
                'background-image': `url(${imgUrl})`,
            }"
            class="w-full flex px-16 flex-col-reverse main md:flex-row"
            @click="console"
        >
            <div class="h-full w-full md:w-1/2 flex flex-col items-center">
                <Button
                    @click="openDialog"
                    label="Start new"
                    icon="pi pi-play"
                    class="p-button p-button-warning p-button-raised font-bold start-button mt-16 md:mt-64"
                />
            </div>
            <div class="w-full md:w-1/2 flex flex-col">
                <h1 class="text-6xl font-bold text-indigo-800 mt-16 md:mt-32">
                    Quizzes for Fun and Learning
                </h1>
            </div>
        </section>
    </div>
</template>
<script>
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Navbar from "../Layouts/Navbar.vue";
import imgUrl from "../../../public/storage/1.jpg";
import { Inertia } from "@inertiajs/inertia";

export default {
    components: { Navbar, Button, Dialog },
    data() {
        return {
            imgUrl: imgUrl,
            colorText: "blue",
            dialog: false,
        };
    },
    methods: {
        openDialog() {
            if (
                !this.$page.props.auth.user &&
                sessionStorage.getItem("auth_alert") !== "true"
            ) {
                this.dialog = true;
            } else {
                this.toCategories();
            }
        },
        toLogin() {
            this.$inertia.visit("/login");
        },
        toRegister() {
            this.$inertia.visit("/register");
        },
        toCategories() {
            this.$inertia.visit("/categories");
        },
        toCategoriesFromDialog() {
            sessionStorage.setItem("auth_alert", "true");
            this.$inertia.visit("/categories");
        },
    },
};
</script>
<style scoped>
.main {
    background-size: cover;
    height: 100vh;
}
.start-button {
    animation: start-button 2s infinite ease-in-out;
}
@keyframes start-button {
    from {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    to {
        transform: translateY(0);
    }
}
</style>
