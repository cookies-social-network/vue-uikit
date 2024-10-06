<template>
  <div class="ui-input">
    <div class="ui-input__inner">
      <input v-model="modelValue" class="ui-input__field" v-bind="$attrs" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const modelValue = defineModel<string | number>()

defineOptions({
  inheritAttrs: false,
})
</script>

<style lang="scss" scoped>
.ui-input {
  width: 100%;
  height: 40px;
  border-radius: 4px;

  &__inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
