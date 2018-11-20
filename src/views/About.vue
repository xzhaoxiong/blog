<template>
  <div class="about">
    <loading show></loading>
    <div>
      {{dates}}
    </div>
    
  </div>
</template>

<script>
import loading from "@com/loading/loading";
export default {
  name: "about",
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
  components: {
    loading
  },
};
</script>

