<template>
  <div>
    <div class="header clearfix">
        <nav>
          <ul class="nav nav-pills pull-right">
            <li role="presentation" class="active"><a href="">Home</a></li>
            <li role="presentation"><a href="#/About">About</a></li>
            <li role="presentation"><a href="#/Contact">Contact</a></li>
            <li role="presentation"><a href="#/uploadFile">Upload File</a></li>
            
          </ul>
        </nav>
        <h3 class="text-muted">{{webtitle}}</h3>
    </div>
  </div>
</template>

<script>

export default{
  props:['webtitle']
}

</script>

<style>

</style>
