<template>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">更新・削除</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input class="form-control" type="text" v-model="modalInput[0]">
        <input class="form-control" type="text" v-model="modalInput[1]">
        <input class="form-control" type="text" v-model="modalInput[2]">
        <input class="form-control" type="text" v-model="modalInput[3]">
        <input class="form-control" type="text" v-model="modalInput[4]">
        <input class="form-control" type="text" v-model="modalInput[5]">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success">Update</button>
        <button type="button" class="btn btn-warning">Delete</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import firebase from '../firebase/compat/app'
// import "../firebase/compat/database"

export default {
  /* eslint-disable */
  name: 'Modal',
  data() {
    return {
      
    }
  },
  props: {
    modal: {type: Array}
  },
  computed: {
    modalInput(){
      return this.modal
    }
  },
  methods: {
    
  }
}
</script>