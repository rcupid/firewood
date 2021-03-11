<template>
  <outer>
    <inner>
    </inner>
  </outer>
</template>

  // outer.vue
  created () {
    console.log('outer created')
  },
  mounted () {
    console.log('outer mounted')
  }

// inner.vue
created () {
    console.log('inner created')
  }
mounted () {
    console.log('inner mounted')
  }
}
