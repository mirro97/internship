<template>
  <div>
    <div class="test-container">
      <div class="show-msg">
        <p>
          createToast('')
        </p>
      </div>

      <div class="setting-container">
        <div class="input-options">
          <div class="i-options t-title">
            <strong class="option-t">title</strong>
            <input class="input-box" type="text" v-model="title" />
          </div>

          <div class="i-options t-description">
            <strong class="option-t">description</strong>
            <input class="input-box" type="text" v-model="description" />
          </div>

          <div class="i-options t-timeout">
            <strong class="option-t">timeout</strong>
            <input class="input-box" type="text" v-model="timeOut" />
          </div>

          <div class="i-options t-toastBoxColor">
            <strong class="option-t">toastBoxColor</strong>
            <input class="input-box" type="text" v-model="toastBoxColor" />
          </div>
        </div>

        <div class="set-position">
          <strong class="option-t">position</strong>
          <div class="option-value">
            <div class="r-options">
              <input
                type="radio"
                id="top-left"
                value="top-left"
                v-model="pickedPos"
              />
              <label for="top-left">
                <div class="chk-box" v-if="pickedPos === 'top-left'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                top-left
              </label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="top-right"
                value="top-right"
                v-model="pickedPos"
              />
              <label for="top-right">
                <div class="chk-box" v-if="pickedPos === 'top-right'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                top-right
              </label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="top-center"
                value="top-center"
                v-model="pickedPos"
              />
              <label for="top-center">
                <div class="chk-box" v-if="pickedPos === 'top-center'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                top-center
              </label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="bottom-left"
                value="bottom-left"
                v-model="pickedPos"
              />
              <label for="bottom-left">
                <div class="chk-box" v-if="pickedPos === 'bottom-left'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                bottom-left
              </label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="bottom-right"
                value="bottom-right"
                v-model="pickedPos"
              />
              <label for="bottom-right">
                <div class="chk-box" v-if="pickedPos === 'bottom-right'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                bottom-right
              </label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="bottom-center"
                value="bottom-center"
                v-model="pickedPos"
              />
              <label for="bottom-center">
                <div class="chk-box" v-if="pickedPos === 'bottom-center'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                bottom-center
              </label>
            </div>
          </div>
        </div>

        <div class="set-type">
          <strong class="option-t">type</strong>
          <div class="option-value">
            <div class="r-options">
              <input
                type="radio"
                id="default"
                value="default"
                v-model="pickedType"
              />
              <label for="default">
                <div class="chk-box" v-if="pickedType === 'default'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                default
              </label>
            </div>

            <div class="r-options">
              <input type="radio" id="info" value="info" v-model="pickedType" />
              <label for="info">
                <div class="chk-box" v-if="pickedType === 'info'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                info
              </label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="warning"
                value="warning"
                v-model="pickedType"
              />
              <label for="warning">
                <div class="chk-box" v-if="pickedType === 'warning'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                warning
              </label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="success"
                value="success"
                v-model="pickedType"
              />
              <label for="success">
                <div class="chk-box" v-if="pickedType === 'success'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                success
              </label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="danger"
                value="danger"
                v-model="pickedType"
              />
              <label for="danger">
                <div class="chk-box" v-if="pickedType === 'danger'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                danger
              </label>
            </div>
          </div>
        </div>

        <div class="set-transition">
          <strong class="option-t">transition</strong>
          <div class="option-value">
            <div class="r-options">
              <input
                type="radio"
                id="bounce"
                value="bounce"
                v-model="pickedTrans"
              />
              <label for="bounce">
                <div class="chk-box" v-if="pickedTrans === 'bounce'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                bounce
              </label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="zoom"
                value="zoom"
                v-model="pickedTrans"
              />
              <label for="zoom">
                <div class="chk-box" v-if="pickedTrans === 'zoom'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                zoom
              </label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="slide"
                value="slide"
                v-model="pickedTrans"
              />
              <label for="slide">
                <div class="chk-box" v-if="pickedTrans === 'slide'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                slide
              </label>
            </div>
          </div>
        </div>
      </div>

      <button class="btn" @click="setOptions">
        Show Toast
      </button>
    </div>

    <keep-alive>
      <div class="toast-container">
        <component v-for="toast in clicks" :key="toast" :is="toast"></component>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import Toast from "./Toast";
export default {
  props: ["testOptions"],
  data() {
    return {
      pickedPos: "",
      pickedType: "",
      pickedTrans: "",
      title: "타이틀을 입력해주세요",
      description: "내용을 입력해주세요",
      timeOut: 0,
      toastBoxColor: "",
      chk: false,
      clicks: []
    };
  },
  methods: {
    add() {
      console.log("toastBoxColor:" + this.toastBoxColor);
      this.clicks.push("Toast");
    },
    setOptions() {
      this.$store.commit("SET_TITLE", this.title);
      this.$store.commit("SET_DESCRIPTION", this.description);
      this.$store.commit("SET_TIMEOUT", this.timeOut);
      this.$store.commit("SET_BOXCOLOR", this.toastBoxColor);
      this.$store.commit("SET_POSITION", this.pickedPos);
      this.$store.commit("SET_TYPE", this.pickedType);
      this.$store.commit("SET_TRANSITION", this.pickedTrans);

      return this.add();
    }
  },
  components: { Toast },
  computed: {
    getToastBoxColor() {
      return this.$store.state.toastBoxColor;
    }
  }
};
</script>

<style scoped>
strong {
  display: block;
}
.test-container {
  padding: 50px 0 40px 0;
  background-color: #f1f3f5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.show-msg {
  width: 500px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 15px 10px;
}

.setting-container {
  display: flex;
  margin-top: 50px;
  margin-bottom: 25px;
}

.setting-container > div {
  margin-right: 50px;
}

.setting-container > div:last-child {
  margin-right: 0;
}

.option-t {
  margin-bottom: 6px;
}

.input-box {
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 7px 0 7px 5px;
}

.option-value {
  display: flex;
  flex-direction: column;
}

input[type="radio"] {
  display: none;
}
.fa-check-square,
.fa-square {
  display: inline-block;
  cursor: pointer;
  font-size: 17px;
  margin-right: 5px;
}

.input-options > div {
  margin-bottom: 10px;
}

.i-options {
  display: flex;
  flex-direction: column;
}

.r-options {
  margin-bottom: 6px;
}

.chk-box {
  display: inline-block;
}

.btn {
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid #afe05a;
  border-radius: 6px;
  cursor: pointer;
}

.btn:hover {
  background-color: #afe05a;
}

.toast-container {
  position: fixed;
  top: 0;
  right: 0;
}
</style>
