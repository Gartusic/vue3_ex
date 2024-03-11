<script setup>
import { ref } from 'vue'
import Axios from 'axios'
const axios = Axios
let hello = ref("ㅎㅇ");
let modalBool = ref(false)
let txtList = ref([])
let txtInput = ref("")
let errMsg = ref("")
const getHello = () => {
    // axios
    //   .post('/api/helloData', { "hi": "안녕하세용" }) //프록시 설정은 vite.config.js에서 함
    //   .then((response) => {

    //     console.log(response)
    //     hello.value = response
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })

    // POST 요청 전송
    axios({
        method: 'post',
        url: '/api/helloData',
        data: {
            helloData: '안녕하세용'
        }
    })
        .then(function (res) {
            console.log(res.data)
            console.log(res)
            hello.value = res.data
        })
        .catch(function (err) {
            console.error(err)
        })
}

// export default {
//   mounted() {
//     this.serverTest();
//   },

//   methods: {
//     serverTest() {
//       this.$axios.post('/api/helloData', {
//         helloData: "안녕하세용"
//       }).then((res) => {
//         console.log(res);
//       }).catch((err) => {
//         console.error(err);
//       })
//     }
//   }
// }
const toggleModal = () => {
    if (modalBool.value) {
        modalBool.value = false
    } else {
        modalBool.value = true
    }
    txtInput.value = ""
    errMsg.value = ""
}
const saveTxt = (e) => {
    if (txtInput.value.length < 10) {
        return errMsg.value = "10자 이상 입력해라 ;"
    }
    console.log(e)
    console.log(txtInput.value)
    txtList.value.push({
        "id": Math.floor(Math.random() * 1000000), "text": txtInput.value, "date": new Date(), "bgColor": getRandomColor()
    })
    console.log(txtList.value)
    toggleModal()
}

function getRandomColor() {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%";
}
</script>

<template>
    <main>
        <div class="overlay" v-if="modalBool">
            <div class="modal">
                <textarea placeholder="내용을 작성해 주세요." name="" id="" cols="30" rows="10" v-model.trim="txtInput"
                    @keypress.enter="saveTxt()" @keyup.esc="toggleModal()"> {{ txtInput }}</textarea>
                <p v-if="errMsg">{{ errMsg }}</p>
                <button class="saveTxt" @click="saveTxt()">등록</button>
                <button class="closeModal" @click="toggleModal()">닫기</button>
            </div>
        </div>
        <div class="container">
            <header>
                <h1>Notes</h1>
                <button @click="toggleModal()">+</button>
            </header>
            <div class="cards-container">
                <div class="card" v-for=" n  in  txtList " :style="{ backgroundColor: n.bgColor }" :key="n.id">
                    <p class="main-text">{{ n.text }}</p>
                    <p class="date">{{ n.date.toLocaleDateString("ko-KR") }}</p>
                </div>
            </div>
        </div>
        <div class="helloDiv" @click="getHello()"> {{ hello }}</div>
    </main>
</template>

<style scoped>
main {
    width: 1200px;
    height: auto;
}

header {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 50px;
}

header button {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: none;
    background-color: #c5c5c5;
    font-size: 50px;
    color: #ffffff;
    cursor: pointer;
}

.cards-container {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
}

.card {
    width: 225px;
    height: 225px;
    margin: 100px 20px 0 0;
    border-radius: 50px;
}

.main-text {
    font-size: 20px;
    padding: 10px;
    text-align: center;
}

.date {
    font-size: 15px;
    padding: 10px 10px 0 0;
    text-align: right;
}

.overlay {
    position: absolute;
    width: 1200px;
    height: 100%;
    background-color: rgba(1, 1, 1, 0.5);
}

.helloDiv {
    width: 100%;
    height: 100px;
    background-color: #91e3ee;
    padding: 40px;
}

.modal {
    width: 500px;
    height: 500px;
    margin: 25vh auto 0 auto;
    background-color: #91e3ee;
    padding: 50px;
}

.modal textarea {
    width: 100%;
}

.modal button {
    display: block;
    width: 100%;
}

.modal p {
    color: red;
}
</style>