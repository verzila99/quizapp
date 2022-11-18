<template>
    <Head>
        <title>Quiz for fun</title>
    </Head>
    <div>
        <Menubar :model="items" class="w-full">
            <template #start>
                <div class="flex items-center sm:ml-16">
                    <a @click="toHome" class="cursor-pointer"
                        ><img
                            alt="logo"
                            src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                            height="40"
                            class="mr-2 h-10"
                    /></a>
                    <Button
                        label="Home"
                        icon="pi pi-home"
                        class="mx-4 p-button-sm p-button-text p-button-secondary"
                        @click="toHome"
                    />
                </div>
            </template>
            <template v-if="!user" #end>
                <div
                    class="flex flex-col items-stretch sm:items-center w-24 sm:w-auto sm:flex-row sm:mr-16"
                >
                    <Button
                        label="Log in"
                        icon="pi pi-sign-in"
                        class="p-button-sm p-button-raised p-button-help"
                        @click="toLogin"
                    />
                    <Button
                        label="Register"
                        icon="pi pi-user"
                        class="sm:mx-4 p-button-sm p-button-raised p-button-success mt-4 sm:mt-0"
                        @click="toRegister"
                    />
                </div>
            </template>
            <template v-else #end>
                <div class="flex flex-col sm:flex-row items-center">
                    <Button
                        label="Statistics"
                        icon="pi pi-chart-bar"
                        class="mx-4 p-button-sm p-button-text p-button-secondary"
                        @click="toStatistics"
                    />
                    <h1 class="hidden md:block mr-5">Hi, {{ user.name }}</h1>
                    <Button
                        label="Logout"
                        icon="pi pi-power-off"
                        class="mx-4 p-button-sm p-button-text p-button-secondary"
                        @click="toLogout"
                    />
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script>
import { Head } from "@inertiajs/inertia-vue3";

import Menubar from "primevue/menubar";
import Button from "primevue/button";
import { Inertia } from "@inertiajs/inertia";

export default {
    components: { Menubar, Button, Head },
    props: { user: Object },
    data() {
        return {
            items: [],
            dialog: false,
        };
    },
    methods: {
        toLogin() {
            this.$inertia.visit("/login");
        },
        toLogout() {
            this.$inertia.post("/logout");
        },
        toRegister() {
            this.$inertia.visit("/register");
        },
        toStatistics() {
            this.$inertia.visit("/statistics/" + this.$page.props.auth.user.id);
        },

        toHome() {
            this.$inertia.visit("/");
        },
    },
    computed: {
        user() {
            return this.$page.props.auth.user;
        },
    },
};
</script>
<style>
.p-menubar-button {
    display: none !important;
}
</style>
