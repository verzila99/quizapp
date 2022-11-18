<script>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import Navbar from "../../Layouts/Navbar.vue";
import Button from "primevue/button";
import { Inertia } from "@inertiajs/inertia";
export default {
    components: {
        Button,
        Navbar,
        GuestLayout,
        InputError,
        InputLabel,
        TextInput,
        Head,
        Link,
    },
    props: { errors: Object },
    data() {
        return {
            form: this.$inertia.form({
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            }),
        };
    },
    methods: {
        submit() {
            this.$inertia.post("/register", this.form);
        },
    },
};
</script>

<template>
    <!-- <Navbar :user="user" /> -->
    <GuestLayout>
        <Head title="Register" />

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="name" value="Name" />
                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />
                <InputError class="mt-2" :message="errors.name" />
            </div>

            <div class="mt-4">
                <InputLabel for="email" value="Email" />
                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autocomplete="username"
                />
                <InputError class="mt-2" :message="errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />
                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password"
                    required
                    autocomplete="new-password"
                />
                <InputError class="mt-2" :message="errors.password" />
            </div>

            <div class="mt-4">
                <InputLabel
                    for="password_confirmation"
                    value="Confirm Password"
                />
                <TextInput
                    id="password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    v-model="form.password_confirmation"
                    required
                    autocomplete="new-password"
                />
                <InputError
                    class="mt-2"
                    :message="errors.password_confirmation"
                />
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    :href="route('login')"
                    class="underline text-sm text-gray-600 hover:text-gray-900"
                >
                    Already registered?
                </Link>

                <Button
                    @click="submit"
                    class="ml-4 p-button-warning"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    label="Register"
                />
            </div>
        </form>
    </GuestLayout>
</template>
<style scoped>
.p-button {
    font-weight: normal;
    font-size: 1.2rem;
}
</style>
