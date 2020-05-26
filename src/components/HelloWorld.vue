<template>
  <div class="hello">
    <component class="jh-headline" :is="element" :style="cssVars">{{ msg }}</component>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    color: {
      type: String,
      default: '#42b983'
    },
    element: {
      type: String,
      default: 'h1'
    }
  },
  computed: {
    cssVars () {
      return {
        '--color': this.color
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jh-headline {
  color: var(--color);
  margin: 40px 0 0;
}
</style>
