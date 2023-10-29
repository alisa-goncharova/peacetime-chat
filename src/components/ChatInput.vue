<template>
  <div class="chat__input">
    <div class="chat__wrapper">
      <input v-model.trim="message" placeholder="Введите команду, например: пост-анонс конкурса от профиля компании в ВК">
      <i class="chat__send fa-sent"></i>
    </div>
    <i class="chat__stop fa-stop"></i>
    <div class="chat__label">Остановить</div>

  </div>
</template>

<script>
export default {
  name: 'ChatInput',
  props: {},
  data() {
    return {
      message: ''
    }
  },
}
</script>
<style>
.chat__input {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 0 40px 0;

}
.chat__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 820px;
  width: 100%;
  position: relative;
  margin: 0 20px 0 0;
}
.chat__wrapper > input {
  border-radius: 13px;
  transition: all 0.3s;
  line-height: 95px;
  padding: 0 0 0 15px;
  background-color: #454246;
  color: #fff;
  font-family: 'SF Pro Text';
  width: 100%;
}
.chat__wrapper > input::placeholder {
  white-space: pre-wrap;
  font-size: 16px;
  line-height: 20px;
}
.chat__send {
  position: absolute;
  right: 20px;
  cursor: pointer;
}
.chat__stop {
  margin: 0 5px 0 0;
  cursor: pointer;
}
.chat__label {
  font-family: 'SF Pro Text';
  font-size: 13px;
  line-height: 16px;
  color: #454246;
  background-color: #F1F2F6;
  padding: 3px 8px;
  border-radius: 16px;
}
</style>