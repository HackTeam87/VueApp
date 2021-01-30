<template>
  <div class="page-loader" v-if="!isloaded">
    <div class="cube"><p>G</p></div>
    <div class="cube"><p>O</p></div>
    <div class="cube"><p>L</p></div>
    <div class="cube"><p>D</p></div>
    <div class="cube"><p>E</p></div>
    <div class="cube"><p>N</p></div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isloaded: false
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        setTimeout(() => {
          this.isloaded = true;
        }, 1000);

      }
    }
  },
}
</script>

<style lang="scss" scoped>
//@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
$colors: #002244, #fec422, #002244, #fec422, #002244, #fec422;
// -----------------------------------------------------
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  //background-color: #333;
  background-color: #ffffff;
  z-index: 999;
  opacity: 0.9;
}

// -----------------------------------------------------
.cube {
  width: 30px;
  height: 30px;
  padding: 1px;
  border-radius: 10px;
  text-align: center;
  color: #ffffff;
  margin-right: 10px;
  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
    }
  }

  .cube,p{
    font-size:1.2em;
    font-family: 'Roboto', sans-serif;
  }

  &:first-child {
    animation: left 1s infinite;
  }

  &:last-child {
    animation: right 1s infinite .5s;
  }
}

// -----------------------------------------------------
@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}

@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>
