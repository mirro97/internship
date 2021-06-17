<template>
  <div class="show-msg">
    <div>
      createToast({
      <div v-if="options.title">&nbsp; title: '{{ options.title }}'</div>

      <div v-if="options.description">
        &nbsp; description: '{{ options.description }}'
      </div>

      <div v-if="options.timeOut">&nbsp; timeOut: {{ options.timeOut }}</div>

      <div v-if="options.toastBoxColor">
        &nbsp; toastBoxColor: '{{ options.toastBoxColor }}'
      </div>

      <div v-if="options.position">
        &nbsp; position: '{{ options.position }}'
      </div>

      <div v-if="options.type">&nbsp; type: '{{ options.type }}'</div>

      <div v-if="options.transition">
        &nbsp; transition: '{{ options.transition }}'
      </div>
      })
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Object
  }
};
</script>

<style>
.show-msg {
  width: 500px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 15px 10px;
}
</style>
