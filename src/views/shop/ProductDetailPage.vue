<template>
  <div>
     <v-list>
      <v-list-item >{{product.description}}</v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'product-detail-page',
  props:{
    product:{
      type:Object
    }
  }

}
</script>

