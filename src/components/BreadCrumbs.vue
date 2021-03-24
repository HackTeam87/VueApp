<template>
    <div>
        <template>
            <v-breadcrumbs :items="crumbs" divider="/">

            </v-breadcrumbs>
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
            this.bread()
        },

        methods: {
            bread() {
                let crumb = {text: $breadcrumbs[0].path}
                this.crumbs.push(crumb)
            }
        }
    }
</script>
