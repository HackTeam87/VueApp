<template>
  <div>
       <v-card-text>
     <p class="text-left">
       {{product.description}}
     </p>
       </v-card-text>
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

