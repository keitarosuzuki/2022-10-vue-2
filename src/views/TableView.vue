<template>
  <div>
    <h1>Firebase Realtime Database 抽出⇒表示</h1>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">name</th>
          <th scope="col">age</th>
          <th scope="col">birthday</th>
          <th scope="col">gender</th>
          <th scope="col">part</th>
          <th scope="col">group</th>
        </tr>
      </thead>
      <tbody>
        <tr 
        v-for="(message, index) in messages" 
        :key="index" 
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal" 
        @click="myFunction($event)">
          <td>{{ message.name }}</td>
          <td>{{ message.age }}</td>
          <td>{{ message.birthday }}</td>
          <td>{{ message.gender }}</td>
          <td>{{ message.part }}</td>
          <td>{{ message.group }}</td>
          <td hidden>{{ index }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <Modal :modal="aryRecord"/>
</template>

<script>
import firebase from '../firebase/compat/app'
import "../firebase/compat/database"
import Modal from "../components/Modal.vue"

export default {
  name: "TableView",
  components: {
    Modal
  },
  data() {
    return {
      messages: [],
      aryRecord: [],
      len: null,
    };
  },
  methods: {
    myFunction(event) {
      // 定義
      var targetEl = event.target.parentElement;
      this.len = targetEl.childElementCount;
      // 初期化
      if(this.aryRecord.length){
        this.aryRecord = [];
      }
      // 配列 → Modalコンポーネントへ
      for(let i = 0; i < this.len; i++){
        this.aryRecord.push(targetEl.children[i].textContent);
      }
    }
  },
  mounted() {
    firebase.database().ref("member").on("value", snapshot => {
      var obj = snapshot.val();
      this.messages = obj;
    });
  }
};
</script>