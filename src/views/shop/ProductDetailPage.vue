<template>
  <div>
     <p class="text-left">
       {{product.description}}
     </p>
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

