import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from './firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyBYbkVtkMe5bjM0vwJ5iapXFTpd9jD7lKU",
    authDomain: "vue-2-57f83.firebaseapp.com",
    databaseURL: "https://vue-2-57f83-default-rtdb.firebaseio.com",
    projectId: "vue-2-57f83",
    storageBucket: "vue-2-57f83.appspot.com",
    messagingSenderId: "1094232819948",
    appId: "1:1094232819948:web:7fd43cfadc3b8351337dc9",
    measurementId: "G-QSQ63QTW1G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
window.firebase = firebase;

createApp(App).use(store).use(router).mount('#app')
