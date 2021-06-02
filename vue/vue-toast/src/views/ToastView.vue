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
            <strong>title</strong>
            <input class="input-box" type="text" />
          </div>
          <div class="option-value">
            <div class="i-options t-description">
              <strong>description</strong>
              <input class="input-box" type="text" />
            </div>
            <div class="i-options t-timeout">
              <strong>timeout</strong>
              <input class="input-box" type="text" />
            </div>
            <div class="i-options t-toastBoxColor">
              <strong>toastBoxColor</strong>
              <input class="input-box" type="text" />
            </div>
          </div>
        </div>

        <div class="set-position">
          <strong>position</strong>
          <div class="option-value">
            <div class="r-options">
              <input
                type="radio"
                id="top-left"
                value="top-left"
                v-model="pickedPos"
              />
              <label for="top-left">top-left</label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="top-right"
                value="top-right"
                v-model="pickedPos"
              />
              <label for="top-right">top-right</label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="top-center"
                value="top-center"
                v-model="pickedPos"
              />
              <label for="top-center">top-center</label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="bottom-left"
                value="bottom-left"
                v-model="pickedPos"
              />
              <label for="bottom-left">bottom-left</label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="bottom-right"
                value="bottom-right"
                v-model="pickedPos"
              />
              <label for="bottom-right">bottom-right</label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="bottom-center"
                value="bottom-center"
                v-model="pickedPos"
              />
              <label for="bottom-center">bottom-center</label>
            </div>
          </div>
        </div>

        <div class="set-type">
          <strong>type</strong>
          <div class="option-value">
            <div class="r-options">
              <input
                type="radio"
                id="default"
                value="default"
                v-model="pickedType"
              />
              <label for="default">default</label>
            </div>

            <div class="r-options">
              <input type="radio" id="info" value="info" v-model="pickedType" />
              <label for="info">info</label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="warning"
                value="warning"
                v-model="pickedType"
              />
              <label for="warning">warning</label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="success"
                value="success"
                v-model="pickedType"
              />
              <label for="success">success</label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="danger"
                value="danger"
                v-model="pickedType"
              />
              <label for="danger">danger</label>
            </div>
          </div>
        </div>

        <div class="set-transition">
          <strong>transition</strong>

          <div class="option-value">
            <div class="r-options">
              <input
                type="radio"
                id="bounce"
                value="bounce"
                v-model="pickedTrans"
              />
              <label for="bounce">bounce</label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="zoom"
                value="zoom"
                v-model="pickedTrans"
              />
              <label for="zoom">zoom</label>
            </div>

            <div class="r-options">
              <input
                type="radio"
                id="slide"
                value="slide"
                v-model="pickedTrans"
              />
              <label for="slide">slide</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickedPos: "",
      pickedType: "",
      pickedTrans: ""
    };
  }
};
</script>

<style scoped>
.test-container {
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.show-msg {
  width: 500px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 4px;
  padding: 15px 10px;
  margin-top: 50px;
}

.setting-container {
  display: flex;
  margin-top: 50px;
}

.setting-container > div {
  margin-right: 50px;
}

.setting-container > div:last-child {
  margin-right: 0;
}

.option-value {
  display: flex;
  flex-direction: column;
}

.input-options {
}

.i-options {
  display: flex;
  flex-direction: column;
}

.input-box {
  border: none;
}
</style>
