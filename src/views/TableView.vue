<template>
  <div>
    <h1>Firebase Realtime Database 動作確認</h1>
    <input v-model="message" />
    <button 
      type="button" 
      class="btn btn-primary btn-sm" 
      @click="addMessage"
    >
    メッセージを追加
    </button>
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        {{ message.content }} index:{{ index }}
        <span @click="deleteMessage(index)">X</span>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from '../firebase/compat/app'
import "../firebase/compat/database"

export default {
  name: "TableView",
  data() {
    return {
      message: "",
      messages: []
    };
  },
  methods: {
    addMessage() {
      firebase.database().ref("slack")
        .push({
          content: this.message,
          user: {
            name: "John Doe"
          }
        });
    },
    deleteMessage(index) {
      firebase
        .database()
        .ref("slack")
        .child(index)
        .remove();
    }
  },
  mounted() {
    firebase.database().ref("slack")
      .on("value", snapshot => (this.messages = snapshot.val()));
  }
};
</script>