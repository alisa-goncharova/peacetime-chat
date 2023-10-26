<template>
  <div id="app">
    <ChatHeader/>
    <Chat/>
  </div>
</template>

<script>

import ChatHeader from "@/components/ChatHeader.vue";
import Chat from "@/pages/templateChat.vue";


export default {
  name: 'App',
  components: {Chat, ChatHeader}
}
</script>

<style>
* {
  font-family: 'SF Pro Text';
}
</style>


