<template>
  <div>
    <h1>Firebase Realtime Database 登録 動作確認</h1>
    <div class="input-group mb-3 input-area">
      <input type="text" 
             class="form-control" 
             placeholder="名前" 
             aria-label="Username" 
             aria-describedby="basic-addon1"
             v-model="name">
      <input type="number" 
             class="form-control border-danger border-2" 
             placeholder="歳" 
             aria-label="Username" 
             aria-describedby="basic-addon1" 
             v-model="age">
      <input type="date" 
             class="form-control" 
             placeholder="生年月日" 
             aria-label="Username" 
             aria-describedby="basic-addon1" 
             v-model="birthday">
      <select class="form-select" 
              id="inputGroupSelect01" 
              v-model="gender">
        <option value="男">男</option>
        <option value="女">女</option>
        <option value="不明">不明</option>
      </select>
      <input type="text" 
             class="form-control" 
             placeholder="パート" 
             aria-label="Username" 
             aria-describedby="basic-addon1" 
             v-model="part">
      <input type="text" 
             class="form-control" 
             placeholder="グループなど" 
             aria-label="Username" 
             aria-describedby="basic-addon1" 
             v-model="group">
    </div>
    <button type="button" 
            class="btn btn-success btn-sm" 
            @click="addMember">メンバーを追加</button>
  </div>
</template>

<script>
import firebase from '../firebase/compat/app'
import "../firebase/compat/database"

export default {
  name: "AddView",
  data() {
    return {
      name: "",
      age: "",
      birthday: "",
      gender: "",
      part: "",
      group: "",
    };
  },
  methods: {
    addMember() {
      var result = confirm('登録しますか？');
      if(result) {
        firebase.database().ref("member/").push({
          name: this.name,
          age: this.age,
          birthday: this.birthday,
          gender: this.gender,
          part: this.part,
          group: this.group,
        });
      } else {
        return
      }
    },
  }
};
</script>

<style scoped>
.input-area{
  padding: 0px 80px 0px;
}
</style>