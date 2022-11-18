<script>
import Button from "primevue/button";
import Checkbox from "@/Components/Checkbox.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import Navbar from "../../Layouts/Navbar.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

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
        Checkbox,
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
            this.$inertia.post("/login", this.form);
        },
    },
};
</script>

<template>
    <Navbar />
    <GuestLayout>
        <Head title="Log in" />
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email" />
                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autofocus
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
                    autocomplete="current-password"
                />
                <InputError class="mt-2" :message="errors.password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    v-if="canResetPassword"
                    :href="route('password.request')"
                    class="underline text-sm text-gray-600 hover:text-gray-900"
                >
                    Forgot your password?
                </Link>

                <Button
                    @click="submit"
                    class="ml-4 p-button-warning"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    label="Log in"
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
