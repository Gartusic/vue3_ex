<script setup>
import { ref, watch } from "vue"
import quiz from "../data/quizes.json"
import { useRoute, useRouter } from "vue-router";
let quizes = ref(quiz)
let search = ref("")

const route = useRoute()
const router = useRouter()
//const qzSelected = quizes.find(c => c.id == parseInt(route.params.id))
const qId = parseInt(route.params.id)

watch(search, () => {
    quizes.value = quiz.filter(qzVal => qzVal.name.toLowerCase().includes(search.value.toLowerCase())) //퀴즈 이름 필터링 검색
    console.log(quizes.value)
})

</script>

<template>
    <h1>Quizes!!! </h1>
    <input type="text" value="" v-model="search" class="schInput" placeholder="퀴즈를 검색해보세요" />
    <div class="quiz-container">
        <ul>
            <li class="quiz-box" v-for="q in quizes" :key="q.id">
                <div>
                    <img :src="q.img" alt="">
                    <button @click="router.push(`/quiz/${q.id}`)"> {{ q.name }}</button>
                </div>
            </li>
        </ul>
    </div>
</template>


<style scoped>
.schInput {
    width: 100%;
    height: 40px;
}

.quiz-container ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.quiz-box {
    display: block;
    width: 500px;
    height: auto;
    padding: 30px;
    margin: 30px 20px 30px 20px;
    background-color: rgb(223, 236, 210);
}

.quiz-box button {
    display: block;
    width: 100%;
    height: auto;
}

.quiz-box img {
    width: 100%;
    height: 270px;
}
</style>