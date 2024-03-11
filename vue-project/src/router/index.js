import { useRouter, createWebHistory, createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue"
import counter2 from "../components/counter2.vue"
import Note from "../components/Note.vue"
import Quiz from "../components/Quiz.vue"
import QuizD from "../components/QuizD.vue"
import QuizExam from "../components/QuizExam.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), //기본 경로
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/home",
            name: "homeView",
            component: HomeView
        },
        {
            path: "/counter",
            name: "counter",
            component: counter2
        },
        {
            path: "/note",
            name: "note",
            component: Note
        },
        {
            path: "/quiz",
            name: "quiz",
            component: Quiz
        },
        {
            path: "/quiz/:qId",
            name: "quizDetail",
            component: QuizD
        },
        {
            path: "/quiz/:qId/exam",
            name: "quizExam",
            component: QuizExam
        }
    ]
})

export default router;