<template>
  <div>
<v-card-text>
        <p class="text-left" v-html='post.text'></p>
  <a href=""></a>
</v-card-text>
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


