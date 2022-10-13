<template>
  <div>
    <h1>Firebaseを使った読み書き確認</h1>
    <input v-model="message" />
    <button type="button" class="btn btn-primary" @click="addMessage">メッセージを追加</button>
  </div>
</template>

<script>
import firebase from '../firebase/compat/app'
import "../firebase/compat/database";

export default {
  name: "HomeView",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    addMessage() {
      firebase.database().ref("slack")
        .set({
          content: this.message,
          user: {
            name: "John Doe"
          }
        });
    }
  }
};
</script>