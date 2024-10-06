<template>
  <div>
    <h1>Main Page</h1>
    <h2>Hi</h2>

    <ui-button>CLick</ui-button>

    <ui-input v-model="value" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { UiButton, UiInput } from '#shared/ui'

const value = ref('')
</script>
