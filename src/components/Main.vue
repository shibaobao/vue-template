<template>
    <div class="">
      <p>{{ $t("message.hello") }}</p>
      <Date-picker type="date" :placeholder="$t('message.select_data')" style="width: 200px"></Date-picker>
    </div>
</template>

<script>
export default {
  name: 'main'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
