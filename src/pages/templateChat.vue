<template>
  <div class="chat">
    <chatMessages :messages="messages"/>
    <chatInput/>
  </div>
</template>

<script>
import ChatMessages from "@/components/ChatMessages.vue";
import ChatInput from "@/components/ChatInput.vue";
import {mapState} from "vuex";

export default {
  name: 'templateChat',
  components: {ChatInput, ChatMessages},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      messages: state => state.messages
    })
  }
}
</script>

<style>
.chat {
  //padding: 20px 30px 20px 30px;
}
</style>