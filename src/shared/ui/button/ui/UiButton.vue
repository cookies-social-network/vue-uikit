<template>
  <button :class="classes">
    <slot v-if="$slots.prefix" name="prefix" />

    <span class="ui-button__content">
      <slot />
    </span>

    <slot v-if="$slots.suffix" name="suffix" />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

type Props = {
  type?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  loading?: boolean
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  icon: '',
  iconSize: 'medium',
})

const classes = computed(() => {
  return [
    'ui-button',
    `ui-button--${props.type}`,
    `ui-button--${props.size}`,
    {
      'ui-button--disabled': props.disabled,
      'ui-button--loading': props.loading,
      'ui-button--icon': props.icon,
    },
  ]
})
</script>

<style lang="scss" scoped>
.ui-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--light-text);

  &--primary {
    background-color: var(--light-primary);
  }

  &--secondary {
    background-color: var(--light-secondary);
  }

  &--tertiary {
    background-color: var(--light-accent);
  }
}
</style>
