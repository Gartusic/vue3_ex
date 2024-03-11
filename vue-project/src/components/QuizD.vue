<script setup>
import { ref, watch } from "vue"
import { useRoute, useRouter, RouterLink } from "vue-router"
import quiz from "../data/quizes.json"
const route = useRoute()
const router = useRouter()
let qId = parseInt(route.params.qId) //퀴즈 아이디

let quizInfo = quiz.find(q => q.id === qId)
console.log(quizInfo)
</script>

<template>
    <div>나는 퀴즈 상세페이지야 ^^</div>
    <div>
        {{ qId }}
    </div>
    <div class="qzContainer">
        <img :src="quizInfo.img" style="display:block;" />
        과목 : {{ quizInfo.name }}
        문항 수 : {{ quizInfo.questions.length }} 개
    </div>
    <p v-for="(qq, index) in quizInfo.questions">{{ index + 1 }}번째 문항 : {{ qq.text }}</p>
    <button>
        <routerLink to="/quiz">뒤로 가기</routerLink>
    </button>
    <button @click="router.push(`/quiz/${qId}/exam`)">퀴즈 풀기</button>
</template>

<style scoped>
.qzContainer {
    margin: 30px auto;
}
</style>