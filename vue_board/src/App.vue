<template>
  <div id="app">
    <button v-on:click="getList(1)">버튼</button>
    <img src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<script>
// new Vue({ //??이거 아닌것같음ㅇㅇㅇ
//     created: function () {
//     console.log('생성')
//     setTimeout(() => {
//       this.$mount('#app')
//     }, 5000)
//   },
//   beforeMount: function () {
//     console.log('생성전 마운트')
//   },
//   mounted: function () {
//     console.log('생성 후 마운트')
//     this.getList(1);
//   },
//   methods: {
//     getList (rId) {
//       console.log('getList')
//         const getList = async () => {
//           const record = await pb.collection('posts').getFullList(rId, {
//             expand: 'relField1,relField2.subRelField'
//           })
//           return record
//         }
//     }
//   }
// })
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
