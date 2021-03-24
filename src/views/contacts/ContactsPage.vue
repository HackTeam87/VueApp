<template>
    <div>
        <v-container>
          <GoogleMap></GoogleMap>
        </v-container>
    </div>
</template>

<script>
    import GoogleMap from '@/components/GoogleMap.vue'

    export default {
      name: 'Contacts',
      components: {
        GoogleMap
      }
    }
</script>

<style scoped>

</style>