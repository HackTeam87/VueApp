<template>
    <div class="main">
        <h1 class="heading">Магазин</h1>
        <v-container grid-list-md>
            <v-layout row wrap justify-center>

                <v-container fluid>
                    <v-row>
                        <v-col v-for="(p,index) in Product" :key="index" class="mx-auto" max-width="250" cols="12"
                               sm="4">
                            <v-card>
                                <v-card-text>
                                    <div class="font-weight-light subtitle-1  text-right ">Ціна: <span
                                            style="color:red;">{{ p.price }}</span>.грн
                                    </div>
                                    <p class="headline font-weight-light text-uppercase">{{ p.name }}</p>

                                    <v-img class="white--text align-end" height="280px" v-bind:src="p.img"></v-img>

                                    <div class="text--primary">
                                        <p class="text-left">
                                            {{ p.short_description }}
                                        </p>
                                    </div>
                                     <ProductDetailPage v-show="clickedProduct === p.id"
                                                   v-bind:product="p"/>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn small replace class="indigo" style="color:white;"
                                           @click="clickedProduct = p.id" v-show="clickedProduct !== p.id">
                                        Детально
                                        <v-icon>
                                            mdi-chevron-double-right
                                        </v-icon>
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>

                    </v-row>
                </v-container>

            </v-layout>
        </v-container>


    </div>
</template>

<script>
    import ProductDetailPage from '@/views/shop/ProductDetailPage.vue'
    export default {
        name: 'product-page',
        components: {
            ProductDetailPage
        },
        data: () => ({
            clickedProduct: 0,
            Product: []
        }),
        created() {
            this.GetProduct()
        },
        methods: {
            getIdFromQuery() {
                console.log(this.$route);
                if (typeof this.$route.query.id !== 'undefined') {
                    return this.$route.query.id;
                }

                return "";
            },
            async GetProduct() {
                const response = await this.$api.auth.getApi('/product-list/p=' + this.getIdFromQuery())
                let Product = response.data.data
                this.Product = Product
            }
        }

    }
</script>

