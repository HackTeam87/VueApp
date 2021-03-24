<template>
    <div class="main">
        <h1 class="heading">Магазин</h1>
        <v-container grid-list-md>
            <v-layout row wrap justify-center>

                <v-flex d-flex sm4 v-for="(i,index) in Main" :key="index" >
                    <v-card hover data-aos="zoom-in" data-aos-easing="ease" @click="SubGroup(i.id)">

                        <v-card-title class="font-weight-medium headline" >
                            {{i.name}}</v-card-title>
                        <v-img class="white--text align-end" height="150px"
                               src="@/assets/img/logo.webp">
                        </v-img>

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
            Main: []
        }),
        created() {
            this.MainGroup()
        },
        methods: {
            async MainGroup() {
                const response = await this.$api.auth.getApi('/main-group-list/p')
                let Parent = response.data.data
                this.Main = Parent
            },
            SubGroup(id){
                 this.$router.push({ name: 'SubGroup', query: { id: id } })
            }
        }

    }
</script>
