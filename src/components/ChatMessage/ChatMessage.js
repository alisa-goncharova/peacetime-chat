export default {
    props: {
        message: {
            type: Object,
            required: true
        },
        messageId: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            isEdit: false,
            editedText: ''
        }
    },
    computed: {
        //Возвращаем необходимую аватарку
        authorClasses() {
            return [
                this.message.author === 'e' ? 'fa-assistant' : 'fa-avatar',
            ];
        },
    },
    methods: {
        // Копируем сообщение
        copyMessage() {
            let copy = this.$refs.list.innerText;

            this.$refs.tooltip.classList.add('message__tooltip--active')
            //Записываем строку copy в системный буфер обмена
            navigator.clipboard.writeText(copy)
                .then(() =>{
                    console.log('Скопировано');
                })
                .catch(error => {
                    console.log(error)
                })
            // Отображаем tooltip и удаляем через 2 секунды
            setTimeout(() => {
                this.$refs.tooltip.classList.remove('message__tooltip--active')
            }, 2000)
        },
        // Редактируем сообщение
        editMessage() {
            let heightTextarea = this.$refs.description.offsetHeight; // Высчитываем высоту блока
            this.$refs.textarea.style.height = `${ heightTextarea}px`; // Присваем высоту блока textarea
            this.isEdit = true;

        },
        //Сохраняем сообщение в state
        changeTextarea(event) {
            this.editedText = event.target.value;
        },
        saveMessage() {
            if(this.editedText) {
                //Вызыываем мутацию
                this.$store.dispatch('updateMessageAction', {id: this.messageId, text: this.editedText})
                this.isEdit = false;
            }
        }
    }
}