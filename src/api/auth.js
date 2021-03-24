export default function (instance) {
    return {
        getApi(link) {
            return instance.get(link)
        },
    }
}