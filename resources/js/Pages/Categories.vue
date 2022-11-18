<template>
    <div>
        <Navbar />

        <div
            :style="{
                'background-image': `url(${imgUrl})`,
            }"
            class="pt-6"
        >
            <h1 class="w-full font-bold text-2xl text-center">
                Choose Category
            </h1>

            <section class="w-full h-screen p-5 flex justify-start flex-wrap">
                <Button
                    v-for="key in categories"
                    :key="key.id"
                    @click="goToQuiz(key.id)"
                    :label="key.name"
                    class="p-button-warning p-button-raised my-3 mx-1 font-bold text-2xl"
                />
            </section>
        </div>
    </div>
</template>
<script>
import imgUrl from "../../../public/storage/2.jpg";
import Button from "primevue/button";
import Navbar from "../Layouts/Navbar.vue";
import Dialog from "primevue/dialog";
import Toast from "primevue/toast";
import { Inertia } from "@inertiajs/inertia";
export default {
    components: {
        Navbar,
        Button,
        Dialog,
        Toast,
    },
    props: {
        categories: Array,
    },

    data() {
        return {
            imgUrl: imgUrl,
            spinner: false,
            // categories: [],
        };
    },
    methods: {
        goToQuiz(id) {
            this.$inertia.visit("/categories/" + id);
        },
    },
};
</script>
<style>
.p-button {
    font-size: 1.2rem;
}
</style>
