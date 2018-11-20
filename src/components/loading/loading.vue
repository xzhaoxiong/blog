<template>
  <div style="font-size: 5px" :style="{'font-size': size+'px'}" v-if="show">
    <div class="loader" :style="{'top': top+'%'}"></div>
  </div>
</template>

<script>
  export default {
    props: {
      size: {
        type: Number,
        default: 10
      },
      show: {
        type: Boolean,
        default: false
      },
      top: {
        type: Number,
        default: 50
      }
    }
  }
</script>

<style scoped lang="scss">
  .loader {
    position: absolute;
    left: 50%;
    transform:scale(-50%,-50%);
    width: 1em;
    height: 1em;
    border-radius: 50%;
    text-indent: -9999em;
    animation: load-effect 1s infinite linear;
  }

  @keyframes load-effect {
    0% {
      box-shadow: 0 -3em 0 .2em rgba(65, 120, 217, 1), /*上*/
      2em -2em 0 0 rgba(65, 120, 217, 1), /*右上*/
      3em 0 0 -.5em rgba(65, 120, 217, 1), /*右*/
      2em 2em 0 -.5em rgba(65, 120, 217, 1), /*右下*/
      0 3em 0 -.5em rgba(65, 120, 217, 1), /*下*/
      -2em 2em 0 -.5em rgba(65, 120, 217, 1), /*左下*/
      -3em 0 0 -.5em rgba(65, 120, 217, 1), /*左*/
      -2em -2em 0 0 rgba(65, 120, 217, 1); /*左上*/
    }
    12.5% {
      box-shadow: 0 -3em 0 0 rgba(65, 120, 217, 1),
      2em -2em 0 .2em rgba(65, 120, 217, 1),
      3em 0 0 0 rgba(65, 120, 217, 1),
      2em 2em 0 -.5em rgba(65, 120, 217, 1),
      0 3em 0 -.5em rgba(65, 120, 217, 1),
      -2em 2em 0 -.5em rgba(65, 120, 217, 1),
      -3em 0 0 -.5em rgba(65, 120, 217, 1),
      -2em -2em 0 -.5em rgba(65, 120, 217, 1);
    }
    25% {
      box-shadow: 0 -3em 0 -.5em rgba(65, 120, 217, 1),
      2em -2em 0 0 rgba(65, 120, 217, 1),
      3em 0 0 .2em rgba(65, 120, 217, 1),
      2em 2em 0 0 rgba(65, 120, 217, 1),
      0 3em 0 -.5em rgba(65, 120, 217, 1),
      -2em 2em 0 -.5em rgba(65, 120, 217, 1),
      -3em 0 0 -.5em rgba(65, 120, 217, 1),
      -2em -2em 0 -.5em rgba(65, 120, 217, 1);
    }
    37.5% {
      box-shadow: 0 -3em 0 -.5em rgba(65, 120, 217, 1),
      2em -2em 0 -.5em rgba(65, 120, 217, 1),
      3em 0 0 0 rgba(65, 120, 217, 1),
      2em 2em 0 .2em rgba(65, 120, 217, 1),
      0 3em 0 0 rgba(65, 120, 217, 1),
      -2em 2em 0 -.5em rgba(65, 120, 217, 1),
      -3em 0 0 -.5em rgba(65, 120, 217, 1),
      -2em -2em 0 -.5em rgba(65, 120, 217, 1);
    }
    50% {
      box-shadow: 0 -3em 0 -.5em rgba(65, 120, 217, 1),
      2em -2em 0 -.5em rgba(65, 120, 217, 1),
      3em 0 0 -.5em rgba(65, 120, 217, 1),
      2em 2em 0 0 rgba(65, 120, 217, 1),
      0 3em 0 .2em rgba(65, 120, 217, 1),
      -2em 2em 0 0 rgba(65, 120, 217, 1),
      -3em 0 0 -.5em rgba(65, 120, 217, 1),
      -2em -2em 0 -.5em rgba(65, 120, 217, 1);
    }
    62.5% {
      box-shadow: 0 -3em 0 -.5em rgba(65, 120, 217, 1),
      2em -2em 0 -.5em rgba(65, 120, 217, 1),
      3em 0 0 -.5em rgba(65, 120, 217, 1),
      2em 2em 0 -.5em rgba(65, 120, 217, 1),
      0 3em 0 0 rgba(65, 120, 217, 1),
      -2em 2em 0 .2em rgba(65, 120, 217, 1),
      -3em 0 0 0 rgba(65, 120, 217, 1),
      -2em -2em 0 -.5em rgba(65, 120, 217, 1);
    }
    75% {
      box-shadow: 0 -3em 0 -.5em rgba(65, 120, 217, 1),
      2em -2em 0 -.5em rgba(65, 120, 217, 1),
      3em 0 0 -.5em rgba(65, 120, 217, 1),
      2em 2em 0 -.5em rgba(65, 120, 217, 1),
      0 3em 0 -.5em rgba(65, 120, 217, 1),
      -2em 2em 0 0 rgba(65, 120, 217, 1),
      -3em 0 0 .2em rgba(65, 120, 217, 1),
      -2em -2em 0 0 rgba(65, 120, 217, 1);
    }
    87.5% {
      box-shadow: 0 -3em 0 0 rgba(65, 120, 217, 1),
      2em -2em 0 -.5em rgba(65, 120, 217, 1),
      3em 0 0 -.5em rgba(65, 120, 217, 1),
      2em 2em 0 -.5em rgba(65, 120, 217, 1),
      0 3em 0 -.5em rgba(65, 120, 217, 1),
      -2em 2em 0 0 rgba(65, 120, 217, 1),
      -3em 0 0 0 rgba(65, 120, 217, 1),
      -2em -2em 0 .2em rgba(65, 120, 217, 1);
    }
    100% {
      box-shadow: 0 -3em 0 .2em rgba(65, 120, 217, 1),
      2em -2em 0 0 rgba(65, 120, 217, 1),
      3em 0 0 -.5em rgba(65, 120, 217, 1),
      2em 2em 0 -.5em rgba(65, 120, 217, 1),
      0 3em 0 -.5em rgba(65, 120, 217, 1),
      -2em 2em 0 -.5em rgba(65, 120, 217, 1),
      -3em 0 0 -.5em rgba(65, 120, 217, 1),
      -2em -2em 0 0 rgba(65, 120, 217, 1);
    }
  }
</style>
