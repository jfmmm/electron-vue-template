<style scoped>
  code {
    background-color: rgba(40, 56, 76, .5);
    border-radius: 3px;
    color: #fff;
    font-weight: bold;
    padding: 3px 6px;
    margin: 0 3px;
    vertical-align: bottom;
  }

  p { line-height: 24px; }
</style>

<template>
  <p>
    You are currently at <code>`{{ $route.path }}`</code> on the <code>`{{ $route.name }}`</code> view.
    <br/>
    <router-link to="/landing-page">Landing page</router-link>
    <button v-on:click="test">Test {{count}}</button>
  </p>
</template>

<script>
  export default {
    data () {
      return {
        count: 11
      }
    },
    methods: {
      test: function () {
        console.log('test')
        // console.log(this.$electron.remote.Menu.getApplicationMenu())
        console.log(this.$electron.ipcRenderer.sendSync('settings:set', 'key', 'value'))
        console.log(this.$electron.ipcRenderer.sendSync('settings:get', 'key'))
        this.count++
      }
    }
  }
</script>