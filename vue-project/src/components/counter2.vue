
<!-- composition API (vue 3) -->
<script setup>
import { useRouter } from "vue-router"
import { ref } from "vue"

const router = useRouter()

let count = ref(0); // 상태를 나타내는 변수로 정의함. = 업데이트될 시 화면에 즉각적으로 변경되어 표시하게 만들어줌. ref
//그러나 ref(0) != 0. ref(0)는 오브젝트이다. count != 0, count.value == 0 count.value가 0인 것이다.

const addToCount = () => {
  count.value = count.value + 1
}
const substractFromCount = () => {
  count.value = count.value - 1
}
</script>

<!-- options API (vue 2)-->
<!-- <script>
export default ({
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addToCount() {
      this.count = this.count + 1
    },
    substractFromCount() {
      this.count = this.count - 1
    }
  }
})
</script> -->

<template>
  <div>
    <h4>
      The current count is...
    </h4>
    <h1>
      {{ count }}
    </h1>
    <button @click="substractFromCount()">-</button>
    <button @click="addToCount()">+</button>
  </div>
</template> 
<!-- template codes are seemed to be an html code but not actually the html. It just allows to create element to the Vue -->



<style scoped> /* 지역적으로 적용 */
 div {
   width: 500px;
 }
</style>