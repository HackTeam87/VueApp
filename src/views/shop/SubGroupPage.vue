<template>
    <div class="main">
        <h1 class="heading">Магазин</h1>
        <v-container grid-list-md>
            <v-layout row wrap justify-center>

                <v-flex d-flex sm4 v-for="(i,index) in Sub" :key="index">
                    <v-card hover data-aos="zoom-in" data-aos-easing="ease" @click="Product(i.id)">


                        <v-img class="white--text align-end" height="195px"
                               :src="i.img">
                        </v-img>
                        <v-card-title class="font-weight-medium headline">
                            <v-spacer/>
                            {{i.tag}}
                            <v-spacer/>
                        </v-card-title>

                        <v-card-text>
                            <v-icon aria-hidden="false">mdi-chevron-double-down</v-icon>
                        </v-card-text>

                    </v-card>
                </v-flex>

            </v-layout>
        </v-container>


    </div>
</template>

<script>

    export default {
        data: () => ({
            Sub: []
        }),
        created() {
            // this.getIdFromQuery()
            this.MainGroup()
        },
        methods: {
            getIdFromQuery() {
                console.log(this.$route);
                if (typeof this.$route.query.id !== 'undefined') {
                    return this.$route.query.id;
                }

                return "";
            },
            async MainGroup() {
                const response = await this.$api.auth.getApi('/sub-group-list/p=' + this.getIdFromQuery())
                let Children = response.data.data
                this.Sub = Children
            },

            Product(id) {
                this.$router.push({name: 'ProductPage', query: {id: id}})
            }
        }

    }
</script>
