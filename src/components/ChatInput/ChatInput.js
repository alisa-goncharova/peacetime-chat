export default {
    name: 'ChatInput',
    props: {},
    data() {
        return {
            message: ''
        }
    },
    methods: {
        //Сохраняем сообщение в state
        sendMessage() {
            if(this.message) {
                this.$store.dispatch('addMessageAction', {author: 'AL', text: this.message})
                this.message = ''
            }
        }
    }
}