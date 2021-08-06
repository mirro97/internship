<template>
  <div>
    <div class="w-container">
      <h1 class="w-title">글 작성하기</h1>
      <input type="text" class="sub-title" placeholder="제목을 입력하세요" />
      <client-only>
        <tiptap @updateContent="updateContent" />
      </client-only>

      <div class="w-bottom">
        <button class="confirm-btn" @click="route">완료</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
    }
  },
  methods: {
    updateContent(content) {
      console.log(content)
      this.content = content
    },
    route() {
      this.$router.push('/')
    },
  },
}
</script>

<style>
@import url('../assets/css/fonts.css');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #333;
  font-family: apple;
}

.w-container {
  width: 100%;
  max-width: 1500px;
  padding: 0 43px 90px 43px;
  margin: 0 auto;
}

.w-title {
  font-size: 28px;
  text-align: center;
  padding: 30px 0;
}

.sub-title {
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-bottom: 1px solid #c8c8c8;
  font-size: 28px;
  margin-bottom: 20px;
}

.sub-title:focus {
  outline: none;
}

.w-content {
  width: 100%;
  min-height: 600px;
}

.w-content:focus {
  outline: none;
}

.w-bottom {
  background-color: #d6d6d6;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  padding: 20px 43px 20px 0;
}

.confirm-btn {
  padding: 10px 16px;
  font-size: 14px;
  color: #91a7ff;
  border-radius: 18px;
  border: 2px solid #91a7ff;
  background-color: #fff;
}

.confirm-btn:hover {
  transition: 0.3s ease;
  color: #fff;
  background-color: #91a7ff;
}
</style>
