<template>
  <div class="main">
    <v-list>
      <v-list-item >{{ post.text }}</v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "news-detail-page",
  props: {
    post: {
      type: Object
    }
  },
}
</script>


