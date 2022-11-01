<template>
    <div class="main">
        <v-parallax dark class="main_parallax"
                    height="100%"
                    src="@/assets/img/news/news_background.webp">
            <h1 class="heading">Новини</h1>
            <v-container grid-list-md>
                <v-layout row wrap v-for="post in News" v-bind:key="post.id">
                    <v-flex d-flex xs12 sm12 md12 offset-sm-2>

                        <v-card class="my-3" hover data-aos="zoom-in" data-aos-easing="ease">

                            <h3 class="headline mb-0 text-left" style="color:#ffffff;background-color:#002244"> {{
                                post.title }}</h3>
                            <v-divider></v-divider>

                            <v-img v-bind:src="post.img" aspect-ratio="2.75"></v-img>

                            <v-card-text>

                                <p class="title text-center" v-html='post.short_text'></p>

                            </v-card-text>


                            <NewsDetailPage v-show="clickedPost === post.id" :post="post"/>


                            <v-card-actions>
                                <v-btn icon class="red--text" href="https://www.facebook.com/groups/355212401778903">
                                    <v-icon small>mdi-facebook</v-icon>
                                </v-btn>

                                <v-spacer></v-spacer>

                                <v-btn small replace style="color:#ffffff;background-color:#002244"
                                       @click="clickedPost = post.id" v-show="clickedPost !== post.id">
                                    Детально
                                    <v-icon>
                                        mdi-chevron-double-right
                                    </v-icon>
                                </v-btn>

                            </v-card-actions>
                        </v-card>

                    </v-flex>


                </v-layout>
            </v-container>
        </v-parallax>
    </div>

</template>

<script>
    import NewsDetailPage from '@/views/news/NewsDetailPage.vue'
    export default {
        name: "news-page",
        data: () => {
            return {
                News: [],
                clickedPost: 0,
            }
        },
        components: {
            NewsDetailPage
        },
        created() {
            this.NewsList()
        },
        methods: {
            async NewsList() {
                const response = await this.$api.auth.getApi('/news-list/p')
                let News = response.data.data
                this.News = News
            },
        },

    }
</script>

<style scoped>
    .heading {
        color: #ffffff;
        text-shadow: 0 3px 0 #002244;
    }
</style>