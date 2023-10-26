<template>
<div class="message">
  <div class="message__author" :class="authorClasses"></div>
  <div class="message__text">
    <div class="message__icons" v-if="message.author === 'e'">
      <div class="message__wrapper">
        <i class="fa-likes"></i>
        <i class="fa-dislike"></i>
      </div>
      <div class="message__wrapper">
        <i class="fa-save"></i>
        <i class="fa-edit"></i>
        <i class="fa-copy"></i>
      </div>
    </div>
    <div class="message__list">
      <p class="message__item" v-for="(item, index) in message.text" :key="index" v-html="item">{{item}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    message: {}
  },
  computed: {
    authorClasses() {
      return [
        this.message.author === 'e' ? 'fa-assistant' : 'fa-avatar',
      ];
    },
  },
}
</script>

<style>
.message {
  max-width: 883px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding-top: 15px;
  padding-bottom: 20px;
}
.message__author {
  margin-right: 28px;
}
.message__text {
  font-family: 'SF Pro Text';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  max-width: 820px;
}
.message__item {
  margin-bottom: 10px
}
.message__icons {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
.message__wrapper {
  display: flex;
}
.message__wrapper > i {
  margin-right: 12px;
  cursor: pointer;
}
</style>