import ChatMessage from "@/components/ChatMessage.vue";
export default {
    name: 'ChatMessages',
    components: {ChatMessage},
    props: {
        messages: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {}
    },
    methods: {
        //Определяем стили для блоков
        messageClasses(message) {
            return {
                'message__assistant': message.author === 'e',
                'message__users':message.author !== 'e'
            };
        },
    }
}