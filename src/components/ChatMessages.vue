<template>
  <div class="chat__list">
      <div v-for="(message, index) in messages" :key="index" :class="messageClasses(message)">
        <ChatMessage :message="message" :messageId="index"/>
      </div>
  </div>
</template>

<script>
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
</script>

<style>
.message__assistant {
  background-color: #F8F8FC;
}
</style>