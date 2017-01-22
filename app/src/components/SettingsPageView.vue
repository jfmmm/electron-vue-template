<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>

<template>
  <div>
    <h1>Settings.</h1>
    <current-page></current-page>
  </div>
</template>

<script>
  import CurrentPage from './SettingsPageView/CurrentPage'

  export default {
    components: {
      CurrentPage
    },
    name: 'settings-page'
  }
</script>
