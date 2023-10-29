<template>
<div class="message">
  <div class="message__author" :class="authorClasses"></div>
  <div class="message__text">
    <div class="message__icons" v-if="message.author === 'e' && !isEdit">
      <div class="message__wrapper">
        <i class="fa-likes"></i>
        <i class="fa-dislike"></i>
      </div>
      <div class="message__wrapper">
        <i class="fa-save"></i>
        <i class="fa-edit" @click="()=> {isEdit = true}"></i>
        <i class="fa-copy" @click="copyMessage"></i>
      </div>
    </div>
    <div class="message__edit" v-if="message.author === 'e' && isEdit">
        <div class="message__save">Сохранить изменения</div>
        <div class="message__cancel" @click="()=> {isEdit = false}">Отмена</div>
    </div>
    <div class="message__list" :class="{'message__list--active': message.author === 'e' && isEdit}" ref="list">
      <p class="message__item" v-for="(item, index) in message.text" :key="index" v-html="item">{{item}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    message: {},
  },
  data() {
    return {
      isEdit: false,
    }
  },
  computed: {
    authorClasses() {
      return [
        this.message.author === 'e' ? 'fa-assistant' : 'fa-avatar',
      ];
    },
  },
  methods: {
    copyMessage() {
      let copy = this.$refs.list.innerText;

      navigator.clipboard.writeText(copy)
          .then(() =>{
            console.log('ok')
          })
          .catch(error => {
            console.log(error)
          })
    }
  }
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
  font-family: 'SF Pro Text', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  max-width: 820px;
  width: 100%;
}
.message__item {
  margin-bottom: 10px
}
.message__icons {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
.message__edit {
  display: flex;
  margin: 0 0 11px 0;
  justify-content: end;
}
.message__save {
  margin: 0 10px 0 0;
  background-color: #454246;
  color: #fff;
  padding: 9px 19px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #454246;
}
.message__save:hover {
  color: #454246;
  background-color: #fff;
  transition: all .3s;
  border: 1px solid #454246;
}
.message__cancel {
  border: 1px solid #454246;
  color: #454246;
  background-color: #fff;
  padding: 9px 19px;
  border-radius: 10px;
  cursor: pointer;
}
.message__cancel:hover {
  transition: all .3s;
  background-color: #454246;
  color: #fff;
}
.message__list {
  border: 1px solid #F8F8FC;
  padding: 20px 10px 20px 20px;
  border-radius: 10px;
}
.message__list--active {
  border: 1px solid #99969B;
  background-color: #fff;
}
.message__wrapper {
  display: flex;
}
.message__wrapper > i {
  margin-right: 12px;
  cursor: pointer;
}
</style>