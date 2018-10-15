<template>
  <div>
    <div class="row cover">
        <div class="col-md-12">
            <h3 class="text-center">Upload File</h3>
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <form @submit.prevent>
                <div class="form-group">
                    <label for="file">File</label>
                    <input type="File" id="file" class="form-control" ref="file"  v-on:change="handleFileUpload()">
                </div>
                <button type="submit" @click="create" class="btn btn-primary">Submit</button>
            </form>    
        </div>    
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      file: ''      
    }
  },
  methods:{
      create(){
          let formData = new FormData();
          formData.append('file', this.file);
          console.log('file')
          console.log(this.file)
          this.$http.post('http://webbidirectionalalicejavatransformation.azurewebsites.net/api/FileUpload', formData,
  {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  })
          .then(response=>{
              this.file = response.data
              console.log(this.file)
          })
      },

      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
  }
}
</script>

<style>

</style>
