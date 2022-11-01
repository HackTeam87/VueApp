<template>
    <div>
        <template>
            <v-container>

                <v-breadcrumbs v-for="c in crumbs" :key="c.path" divider=">">
                    <v-breadcrumbs-item to="/">Домашня</v-breadcrumbs-item>
                    <v-breadcrumbs-item :to="c.path">{{c.meta.key}}</v-breadcrumbs-item>
                </v-breadcrumbs>

            </v-container>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'BreadCrumbs',
        data: () => ({
            crumbs: []
        }),
        created: function () {
            this.getLog()
        },

        methods: {
            getLog() {
                if (this.$route.matched[0].meta.key) {
                    this.crumbs = this.$route.matched
                }

            }
        }
    }
</script>
