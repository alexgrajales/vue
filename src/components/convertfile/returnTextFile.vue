<template>
  <div>
    <div class="row cover">
        <div class="col-md-12">
            <h3 class="text-center">Return File Content</h3>
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <form @submit.prevent>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="form-control" ref="name" v-on:change="handleFileUpload()">
                </div>
                
                <button type="submit" @click="create" class="btn btn-primary">Submit</button>

                
                <div data-spy="scroll" data-target="#navbar-example2" data-offset="50">                  
                  <p>{{ message }}</p>                  
                  
                </div>
                
            </form>    
        </div>    
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      message: ''      
    }
  },
  methods:{
      create(){
      this.$http.get("https://webbidirectionalalicejavatransformation.azurewebsites.net/api/FileUpload/GetFileUploadAsync?name="+this.name).then(response=>{                
        this.message = response.data[0]["texto"]
      })      
      .catch(e=>{
        console.log('error');
      })
    },

      handleFileUpload(){
        this.name = this.$refs.name.value;
      }
  }
}
</script>

<style>

</style>
