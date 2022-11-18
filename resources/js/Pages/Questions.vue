<template>
    <div
        class="h-screen"
        :style="{
            'background-image': `url(${imgUrl})`,
            'background-repeat': 'repeat',
        }"
    >
        <Toast position="bottom-right" />
        <Navbar />
        <div
            class="pt-6"
            :style="{
                'background-image': `url(${imgUrl})`,
                'background-repeat': 'repeat',
            }"
        >
            <div class="h-auto" v-if="showResults">
                <h1 class="w-full font-bold text-2xl text-center">Results</h1>
                <section
                    class="w-full flex flex-col px-16 lg:px-32 justify-between items-start"
                >
                    <div v-for="(key, index) in questions" :key="key">
                        <div class="flex mt-16 mb-5">
                            <p class="inline-block font-bold text-2xl mr-3">
                                {{ index + 1 + ":" }}
                            </p>
                            <p
                                class="text-2xl"
                                v-html="questions[index].question"
                            ></p>
                        </div>
                        <div class="flex flex-wrap ml-4">
                            <Button
                                v-for="el in allRandomAnswers[index]"
                                :key="el"
                                v-html="el"
                                class="p-button-warning b-button-sm p-button-raised my-3 ml-4 font-bold text-2xl"
                            />
                        </div>

                        <p class="font-bold mt-5 ml-8 text-2xl">
                            Correct answer:
                            <span
                                v-html="questions[index].correct_answer"
                            ></span>
                        </p>
                        <div class="flex items-center ml-8 mt-3">
                            <p class="font-bold inline-block mr-5 text-2xl">
                                Your answer:
                                <span v-html="answers[index]"></span>
                            </p>
                            <i
                                v-if="
                                    questions[index].correct_answer ==
                                    answers[index]
                                "
                                class="pi pi-check text-lime-400 text-3xl"
                            ></i>
                            <i
                                v-else
                                class="pi pi-times text-3xl text-red-600"
                            ></i>
                        </div>
                    </div>
                    <h2 class="font-bold text-3xl mt-6 ml-8">
                        Correct answers:
                        <span class="ml-4">{{ correct_answers }}</span>
                    </h2>
                    <div
                        class="h-full w-full flex justify-center items-center my-8"
                    >
                        <Button
                            @click="startNew"
                            label="Start new"
                            icon="pi pi-play"
                            class="p-button p-button-warning p-button-raised"
                        />
                    </div>
                </section>
            </div>
            <div class="px-4 md:px-12" v-else>
                <ProgressBar :value="remainingTime * 10" :showValue="false" />
                <h1
                    class="w-full block font-bold text-2xl text-center my-5"
                    v-html="questions[currentRound].question"
                ></h1>
                <p class="text-center text-2xl">
                    Remaining Time:
                    <span class="ml-5">{{ remainingTime }}</span>
                </p>
                <section
                    class="w-full main-section grid grid-cols-1 md:grid-cols-2 grid-rows-3 p-4 md:px-16 mt-6 items-start"
                >
                    <Button
                        v-for="key in currentAnswers"
                        :key="key"
                        @click="
                            chooseAnswer(key);
                            currentRound++;
                        "
                        v-html="key"
                        class="p-button-warning b-button-lg p-button-raised my-3 mx-1 font-bold text-2xl h-20"
                    />
                </section>
            </div>
        </div>
        <ScrollTop />
    </div>
</template>
<script>
import ProgressBar from "primevue/progressbar";
import ScrollTop from "primevue/scrolltop";
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
        ProgressBar,
        ScrollTop,
    },
    props: {
        questions: [],
        user: null,
        message: "",
        errors: Object,
    },
    data() {
        return {
            imgUrl: imgUrl,
            currentRound: 0,
            currentAnswers: [],
            answers: [],
            showResults: false,
            correct_answers: 0,
            remainingTime: 10,
            counter: null,
            category: null,
            allRandomAnswers: [],
        };
    },
    methods: {
        randomAnswers(current) {
            if (this.currentRound < this.questions.length) {
                this.currentAnswers =
                    this.questions[current].incorrect_answers.split("|");
                this.currentAnswers.push(
                    this.questions[current].correct_answer
                );
                this.currentAnswers = this.currentAnswers
                    .map((value) => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value);
                this.allRandomAnswers[current] = this.currentAnswers;
            }
        },
        chooseAnswer(answer) {
            this.answers.push(answer);
        },
        startNew() {
            this.$inertia.visit("/categories");
        },
        timer() {
            this.remainingTime = 10;
            this.counter = setInterval(() => {
                if (this.remainingTime == 0) {
                    this.chooseAnswer("No answer");
                    this.currentRound++;
                    clearInterval(this.counter);
                } else {
                    this.remainingTime--;
                }
            }, 1000);
        },
        showMessage(color, text) {
            this.$toast.add({
                severity: color,

                detail: text,
                life: 3000,
            });
        },
    },
    computed: {
        user() {
            return this.$page.props.auth.user;
        },
    },
    watch: {
        currentRound() {
            if (this.currentRound >= this.questions.length) {
                this.showResults = true;

                clearInterval(this.counter);
                this.questions.forEach((el, index) => {
                    if (el.correct_answer == this.answers[index]) {
                        this.correct_answers++;
                    }
                });
                if (this.$page.props.auth.user) {
                    axios
                        .post("/quiz", {
                            user: this.$page.props.auth.user.id,
                            category_id: this.questions[0].category_id,
                            correct_answers:
                                (this.correct_answers / this.questions.length) *
                                100,
                        })
                        .then((res) => {
                            if (res.status === 200) {
                                this.showMessage(
                                    "success",
                                    "Results added to profile"
                                );
                            }
                        })
                        .catch((err) => {
                            this.showMessage("error", "Something goes wrong");
                        });
                }
            } else {
                clearInterval(this.counter);
                this.randomAnswers(this.currentRound);
                this.timer();
            }
        },
    },

    mounted() {
        if (this.questions && this.questions.length > 0) {
            this.randomAnswers(0);
            this.timer();
            this.category = this.questions[0].category;
        }
    },
};
</script>
<style>
.p-button {
    font-size: 1.4rem;
    font-weight: bold;
    justify-content: center;
}
.main {
    min-height: 600px;
}
.p-progressbar-value {
    background: rgb(144, 44, 123) !important;
}
</style>
