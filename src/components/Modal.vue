<template>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Firebase Realtime Database 更新・削除</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input class="form-control" type="text" v-model="modalInput[0]">
        <input class="form-control" type="number" v-model="modalInput[1]">
        <input class="form-control" type="text" v-model="modalInput[2]">
        <input class="form-control" type="text" v-model="modalInput[3]">
        <input class="form-control" type="text" v-model="modalInput[4]">
        <input class="form-control" type="text" v-model="modalInput[5]">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" 
                class="btn btn-success" 
                data-bs-dismiss="modal" 
                @click="updateRow(modal[6])">Update</button>
        <button type="button" 
                class="btn btn-warning" 
                data-bs-dismiss="modal" 
                @click="deleteRow(modal[6])">Delete</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import firebase from '../firebase/compat/app'
import "../firebase/compat/database"

export default {
  /* eslint-disable */
  name: 'Modal',
  props: {
    modal: {type: Array}
  },
  computed: {
    modalInput(){
      return this.modal
    }
  },
  methods: {
    updateRow(index){
      var result = confirm('更新しますか？');
      if(result) {
        firebase.database().ref("member").child(index).update({
          name: this.modalInput[0],
          age: this.modalInput[1],
          birthday: this.modalInput[2],
          gender: this.modalInput[3],
          part: this.modalInput[4],
          group: this.modalInput[5],
        });
      } else {
        return
      }
    },
    deleteRow(index){
      var result = confirm('削除しますか？');
      if(result) {
        firebase.database().ref("member").child(index).remove();
      } else {
        return
      }
    },
  }
}
</script>