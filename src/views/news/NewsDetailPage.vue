<template>
  <div>
<v-card-text>
        <p class=" subtitle-1 text-left" v-html='post.text'></p>
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


