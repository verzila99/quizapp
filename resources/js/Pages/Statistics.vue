<template>
    <Navbar />
    <div class="px-4 sm:px-12 md:px-28 py-4 sm:py-12">
        <section class="w-full flex">
            <Chart
                class="w-full"
                type="bar"
                :data="quizzes"
                :options="Options1"
            />
        </section>
        <section class="w-full flex">
            <Chart
                class="w-full"
                type="bar"
                :data="percents"
                :options="Options2"
            />
        </section>
    </div>
</template>
<script>
import Button from "primevue/button";
import Navbar from "../Layouts/Navbar.vue";
import Chart from "primevue/chart";

import { Inertia } from "@inertiajs/inertia";

export default {
    name: "Charts",
    components: { Chart, Navbar, Button },
    props: {
        statistics: Object,
    },
    data() {
        return {
            categories: [],
            rounds: [],
            correct_answers: [],
            quizzes: {
                labels: this.statistics.map((el) => el.name),
                datasets: [
                    {
                        label: "Completed Quizzes",
                        backgroundColor: "#7E57C2",
                        data: this.statistics.map((el) => el.rounds),
                    },
                ],
            },
            Options1: {
                width: 600,
                height: 400,
                indexAxis: "y",
                plugins: {
                    legend: {
                        labels: {
                            color: "#495057",
                        },
                    },
                },
                scales: {
                    xAxis: {
                        ticks: { stepSize: 1, color: "#495057" },
                        grid: {
                            color: "#ebedef",
                        },
                    },
                    y: {
                        ticks: { precision: 2, color: "#495057" },
                        grid: {
                            color: "#ebedef",
                        },
                    },
                },
            },
            percents: {
                labels: this.statistics.map((el) => el.name),
                datasets: [
                    {
                        label: "Correct Answers (%)",
                        backgroundColor: "#FFA726",
                        data: this.statistics.map((el) =>
                            Math.round(el.correct_answers)
                        ),
                    },
                ],
            },
            Options2: {
                width: 600,
                height: 400,
                indexAxis: "y",
                plugins: {
                    legend: {
                        labels: {
                            color: "#495057",
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: { color: "#495057" },
                        grid: {
                            color: "#ebedef",
                        },
                    },
                    y: {
                        ticks: { color: "#495057" },
                        grid: {
                            color: "#ebedef",
                        },
                    },
                },
            },
        };
    },
};
</script>

<style scoped></style>
