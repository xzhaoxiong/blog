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
    transform(scale(-50%,-50%));
    width: 1em;
    height: 1em;
    border-radius: 50%;
    text-indent: -9999em;
    animation: load-effect 1s infinite linear;
  }

  @keyframes load-effect {
    0% {
      box-shadow: 0 -3em 0 .2em $color, /*上*/
      2em -2em 0 0 $color, /*右上*/
      3em 0 0 -.5em $color, /*右*/
      2em 2em 0 -.5em $color, /*右下*/
      0 3em 0 -.5em $color, /*下*/
      -2em 2em 0 -.5em $color, /*左下*/
      -3em 0 0 -.5em $color, /*左*/
      -2em -2em 0 0 $color; /*左上*/
    }
    12.5% {
      box-shadow: 0 -3em 0 0 $color,
      2em -2em 0 .2em $color,
      3em 0 0 0 $color,
      2em 2em 0 -.5em $color,
      0 3em 0 -.5em $color,
      -2em 2em 0 -.5em $color,
      -3em 0 0 -.5em $color,
      -2em -2em 0 -.5em $color;
    }
    25% {
      box-shadow: 0 -3em 0 -.5em $color,
      2em -2em 0 0 $color,
      3em 0 0 .2em $color,
      2em 2em 0 0 $color,
      0 3em 0 -.5em $color,
      -2em 2em 0 -.5em $color,
      -3em 0 0 -.5em $color,
      -2em -2em 0 -.5em $color;
    }
    37.5% {
      box-shadow: 0 -3em 0 -.5em $color,
      2em -2em 0 -.5em $color,
      3em 0 0 0 $color,
      2em 2em 0 .2em $color,
      0 3em 0 0 $color,
      -2em 2em 0 -.5em $color,
      -3em 0 0 -.5em $color,
      -2em -2em 0 -.5em $color;
    }
    50% {
      box-shadow: 0 -3em 0 -.5em $color,
      2em -2em 0 -.5em $color,
      3em 0 0 -.5em $color,
      2em 2em 0 0 $color,
      0 3em 0 .2em $color,
      -2em 2em 0 0 $color,
      -3em 0 0 -.5em $color,
      -2em -2em 0 -.5em $color;
    }
    62.5% {
      box-shadow: 0 -3em 0 -.5em $color,
      2em -2em 0 -.5em $color,
      3em 0 0 -.5em $color,
      2em 2em 0 -.5em $color,
      0 3em 0 0 $color,
      -2em 2em 0 .2em $color,
      -3em 0 0 0 $color,
      -2em -2em 0 -.5em $color;
    }
    75% {
      box-shadow: 0 -3em 0 -.5em $color,
      2em -2em 0 -.5em $color,
      3em 0 0 -.5em $color,
      2em 2em 0 -.5em $color,
      0 3em 0 -.5em $color,
      -2em 2em 0 0 $color,
      -3em 0 0 .2em $color,
      -2em -2em 0 0 $color;
    }
    87.5% {
      box-shadow: 0 -3em 0 0 $color,
      2em -2em 0 -.5em $color,
      3em 0 0 -.5em $color,
      2em 2em 0 -.5em $color,
      0 3em 0 -.5em $color,
      -2em 2em 0 0 $color,
      -3em 0 0 0 $color,
      -2em -2em 0 .2em $color;
    }
    100% {
      box-shadow: 0 -3em 0 .2em $color,
      2em -2em 0 0 $color,
      3em 0 0 -.5em $color,
      2em 2em 0 -.5em $color,
      0 3em 0 -.5em $color,
      -2em 2em 0 -.5em $color,
      -3em 0 0 -.5em $color,
      -2em -2em 0 0 $color;
    }
  }
</style>
