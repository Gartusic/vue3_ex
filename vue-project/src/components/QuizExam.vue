<script setup>
import Question from "../components/Question.vue"
import QuizHeader from "../components/QuizHeader.vue"
import { useRoute } from "vue-router"
import { ref, watch } from "vue"
import quizes from "../data/quizes.json"

const route = useRoute()
const qId = parseInt(route.params.qId)
const qz = quizes.find(q => q.id === qId)

const currQ = ref(1) //현재 퀴즈 문제
const statusQ = ref(`${currQ.value}/${qz.questions.length}`) //퀴즈풀이 전제현황

// () => {} 는 ~~~~  {}를 return한다는 뜻
watch(() => currQ.value, () => {
    if (currQ.value <= `${qz.questions.length}`) {
        statusQ.value = `${currQ.value}/${qz.questions.length}`
    } else {
        statusQ.value = "전부 풀기 완료"
    }
})
</script>

<template>
    <div>
        <QuizHeader :statusQ="statusQ" />
        <div>
            <Question :question="qz.questions[currQ - 1]" />
            <!-- :question이 props로 쓰여 하위 컴포넌트에 연결됨. 하위컴포넌트에서 defineProps로 가져가서 쓸것임 -->
        </div>
        <button @click="currQ++">다음문제</button>
    </div>
</template>