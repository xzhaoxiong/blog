<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{dates}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      dates: null,
    }
  },
  methods: {
    GetList() {
        this.dates = null
        this.portApi.tool.GetUser().then(res => {
          this.dates = res;
        })
      },
  },
 created() {
    this.GetList();
  },
};
</script>
