<template>
  <div>
    <h1>Firebase Realtime Database 登録 動作確認</h1>
    <div class="input-group mb-3">
      <input v-model="name" type="text" class="form-control" placeholder="名前" aria-label="Username" aria-describedby="basic-addon1">
      <input v-model="age" type="text" class="form-control" placeholder="歳" aria-label="Username" aria-describedby="basic-addon1">
      <input v-model="birthday" type="text" class="form-control" placeholder="生年月日" aria-label="Username" aria-describedby="basic-addon1">
      <input v-model="gender" type="text" class="form-control" placeholder="性別" aria-label="Username" aria-describedby="basic-addon1">
      <input v-model="part" type="text" class="form-control" placeholder="パート" aria-label="Username" aria-describedby="basic-addon1">
      <input v-model="group" type="text" class="form-control" placeholder="グループなど" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <button type="button" class="btn btn-success btn-sm" @click="addMember">メンバーを追加</button>
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
      firebase.database().ref("member/").push({
        name: this.name,
        age: this.age,
        birthday: this.birthday,
        gender: this.gender,
        part: this.part,
        group: this.group,
      });
    },
  }
};
</script>
