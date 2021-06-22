<template>
  <div>
    <div class="test-container">
      <OptionsView :options="form"></OptionsView>

      <div class="setting-container">
        <div class="input-options">
          <div class="i-options t-title">
            <strong class="option-t">title</strong>
            <input class="input-box" type="text" v-model="form.title" />
          </div>

          <div class="i-options t-description">
            <strong class="option-t">description</strong>
            <input class="input-box" type="text" v-model="form.description" />
          </div>

          <div class="i-options t-timeout">
            <strong class="option-t">timeout</strong>
            <input class="input-box" type="text" v-model="form.timeOut" />
          </div>

          <div class="i-options t-toastBoxColor">
            <strong class="option-t">toastBoxColor</strong>
            <input class="input-box" type="text" v-model="form.toastBoxColor" />
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
                v-model="form.position"
              />
              <label for="top-left">
                <div class="chk-box" v-if="form.position === 'top-left'">
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
                v-model="form.position"
              />
              <label for="top-right">
                <div class="chk-box" v-if="form.position === 'top-right'">
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
                v-model="form.position"
              />
              <label for="top-center">
                <div class="chk-box" v-if="form.position === 'top-center'">
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
                v-model="form.position"
              />
              <label for="bottom-left">
                <div class="chk-box" v-if="form.position === 'bottom-left'">
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
                v-model="form.position"
              />
              <label for="bottom-right">
                <div class="chk-box" v-if="form.position === 'bottom-right'">
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
                v-model="form.position"
              />
              <label for="bottom-center">
                <div class="chk-box" v-if="form.position === 'bottom-center'">
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
                v-model="form.type"
              />
              <label for="default">
                <div class="chk-box" v-if="form.type === 'default'">
                  <i class="far fa-check-square"></i>
                </div>
                <div class="chk-box" v-else>
                  <i class="far fa-square"></i>
                </div>
                default
              </label>
            </div>

            <div class="r-options">
              <input type="radio" id="info" value="info" v-model="form.type" />
              <label for="info">
                <div class="chk-box" v-if="form.type === 'info'">
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
                v-model="form.type"
              />
              <label for="warning">
                <div class="chk-box" v-if="form.type === 'warning'">
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
                v-model="form.type"
              />
              <label for="success">
                <div class="chk-box" v-if="form.type === 'success'">
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
                v-model="form.type"
              />
              <label for="danger">
                <div class="chk-box" v-if="form.type === 'danger'">
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
                v-model="form.transition"
              />
              <label for="bounce">
                <div class="chk-box" v-if="form.transition === 'bounce'">
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
                v-model="form.transition"
              />
              <label for="zoom">
                <div class="chk-box" v-if="form.transition === 'zoom'">
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
                v-model="form.transition"
              />
              <label for="slide">
                <div class="chk-box" v-if="form.transition === 'slide'">
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

      <button class="btn" @click="add">
        Show Toast
      </button>
    </div>

    <div class="v-toast-container">
      <div
        class="v-toast"
        v-for="(pos, index) in toastList"
        :key="index"
        :class="index"
      >
        <Toast
          v-for="toast in pos"
          :key="toast.id"
          :is="toast.component"
          :options="toast.data"
        ></Toast>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from "./Toast";
import OptionsView from "./OptionsView";
export default {
  components: { Toast, OptionsView },
  data() {
    return {
      form: {
        title: "타이틀을 입력해주세요",
        description: "내용을 입력해주세요",
        timeOut: 5,
        toastBoxColor: "",
        position: "top-right",
        type: "default",
        transition: "bounce"
      },
      toastList: {
        "top-left": [],
        "top-center": [],
        "top-right": [],
        "bottom-left": [],
        "bottom-center": [],
        "bottom-right": []
      }
    };
  },
  methods: {
    add() {
      var toast = Object.assign({}, this.form);

      for (var toastItem in this.toastList) {
        if (toastItem === this.form.position) {
          this.toastList[toastItem].push({
            id: this.toastList.length,
            component: "toast",
            data: toast
          });
        }
      }
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
  padding: 7px 0 7px 7px;
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
  border: 1px solid #40c057;
  border-radius: 6px;
  cursor: pointer;
}

.btn:hover {
  background-color: #40c057;
  color: #fff;
}

.v-toast-container {
  display: flex;
  justify-content: space-between;
}

.v-toast {
  position: fixed;
  display: flex;
  align-items: center;
  width: 400px;
  overflow: hidden;
  pointer-events: none;
}

/* position */
.top-left,
.top-right,
.top-center {
  top: 0;
  flex-direction: column;
}

.bottom-left,
.bottom-right,
.bottom-center {
  flex-direction: column-reverse;
  bottom: 0;
}

.top-left {
  align-items: flex-start;
  left: 0;
}

.top-center {
  left: 50%;
  margin-left: -200px;
}

.top-right {
  align-items: flex-end;
  right: 0;
}

.bottom-left {
  align-items: flex-start;
  left: 0;
}

.bottom-center {
  left: 50%;
  margin-left: -200px;
}

.bottom-right {
  align-items: flex-end;
  right: 0;
}
</style>
