<template>
  <div>
    <div v-if="currentType === 'boardAll'">
      <boardAll></boardAll>
    </div>
    <div v-else-if="currentType === 'boardNews'">
      <boardNews></boardNews>
    </div>
    <div v-else-if="currentType === 'boardFree'">
      <boardFree></boardFree>
    </div>
    <div v-else-if="currentType === 'boardStudy'">
      <boardStudy></boardStudy>
    </div>
    <div v-else-if="currentType === 'boardSchedule'">
      <boardSchedule></boardSchedule>
    </div>
    <div v-else-if="currentType === 'boardStudyAmout'">
      <boardStudyAmout></boardStudyAmout>
    </div>
  </div>
</template>

<script>
import boardNews from "../contents/board_1001.vue";
import boardFree from "../contents/board_1002.vue";
import boardStudy from "../contents/board_1003.vue";
import boardSchedule from "../contents/board_1004.vue";
import boardStudyAmout from "../contents/board_1005.vue";
import boardAll from "../contents/board_all.vue";

export default {
  components: {
    boardNews,
    boardFree,
    boardStudy,
    boardSchedule,
    boardStudyAmout,
    boardAll
  },
  computed: {
    currentType() {
      var type = this.$route.params.boardType;

      return type;
    }
  }
};
</script>

<style scoped>
.border_sec {
  padding: 49px 0 56px 200px;
}

.border_container {
  padding: 0 20px;
}

.board_title {
  font-size: 20px;
  margin-top: 20px;
  display: block;
  text-align: left;
}

.input_group {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.select_type {
  height: 41px;
  border: 1px solid #ced0da;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-right: none;
}

.select_type:focus {
  outline: none;
}

.search_container {
  margin-top: 20px;
}

.search_input {
  height: 35px;
  width: 350px;
  border: 1px solid #ced0da;
  border-radius: 2px;
  padding-left: 8px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 10%), 0px 4px 6px rgb(0 0 0 / 5%),
    inset 0px 1px 0px rgb(255 255 255 / 10%);
}

.btn_container {
  box-shadow: 0px 3px 15px -11px rgba(79, 79, 79, 0.75);
  background-color: #ced4da;
  border: none;
  border-radius: 2px;
  margin-left: 5px;
  padding: 4px 5.5px;
}

.btn_container:hover {
  background-color: #adb5bd;
}

.search_btn {
  height: 25px;
  width: 25px;
  object-fit: cover;
}

.table_container {
  font-size: 14px;
  border: 1px solid #ced4da;
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

.table_container th,
.table_container td {
  border-bottom: 1px solid #ced4da;
}

th {
  background-color: #e9ecef;
  font-size: 14px;
  padding: 5px 10px;
}

table {
  height: 600px;
}

td:first-child {
  padding: 10px;
  width: 5%;
  text-align: center;
}

td:nth-child(2) {
  width: 10%;
  text-align: center;
}

td:nth-child(4) {
  width: 10%;
  text-align: center;
}

td:nth-child(5) {
  width: 50%;
}

td:nth-child(6) {
  width: 13%;
  text-align: center;
}

.page_container {
  width: 100%;
  height: 35px;
  margin-top: 20px;
}

#page_wrapper {
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  border-radius: 4px;
}

.pageIdx a {
  display: inline-block;
  text-align: center;
  line-height: 35px;
  height: 100%;
  width: 43px;
  color: #495057;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-right: none;
}

.pageIdx:first-child a {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.pageIdx:last-child a {
  border-right: 1px solid #dee2e6;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.pageIdx a:hover {
  background-color: #0ca678;
  color: #fff;
}
</style>
