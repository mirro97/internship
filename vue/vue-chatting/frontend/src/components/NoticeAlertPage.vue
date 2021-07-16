<template>
  <div class="notice-wrapper">
    <div class="notice-container">
      <i class="fas fa-times" @click="cancle"></i>
      <p class="notice-des">
        채팅방 상단 공지는 1건만 노출 가능합니다. <br />
        <span class="ask">공지를 등록하시겠습니까?</span>
      </p>
      <div class="btn-container">
        <button class="btn submit" @click="confirm">확인</button>
        <button class="btn cancle" @click="cancle">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    confirm() {
      this.$emit("noticeChk", true);
      this.$emit("alert", false);
    },
    cancle() {
      this.$emit("noticeChk", false);
      this.$emit("alert", false);
    }
  }
};
</script>

<style scoped>
.notice-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.notice-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #343a40;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.87);
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.87);
}

.fa-times {
  margin-top: 10px;
  margin-right: 10px;
}

.notice-des {
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  padding: 20px;
}

.ask {
  color: #228be6;
}

.btn-container {
  width: 100%;
  display: flex;
}

.btn {
  width: 100%;
  background-color: #343a40;
  border: none;
  border-top: 1px solid #868e96;
  padding: 10px 0;
}

.submit {
  border-bottom-left-radius: 5px;
  border-right: 1px solid #868e96;
}

.cancle {
  border-bottom-right-radius: 5px;
}
</style>
