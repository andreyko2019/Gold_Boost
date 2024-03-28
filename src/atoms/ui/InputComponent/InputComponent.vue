<template>
  <label class="input-component" :class="{ 'input-component_border': border }" :for="id">
    <template v-if="type !== 'password'">
      <input
        class="input-component__input"
        :aria-label="ariaLabel"
        :placeholder="placeholderText"
        @input="$emit('update:modelValue', $event.target.value)"
        :id="id"
      />

      <ButtonComponent arialLabel="Search button" v-if="searchButton">
        <SearchIcon />
      </ButtonComponent>
    </template>

    <template v-else>
      <input
        class="input-component__input"
        :type="inputType"
        :placeholder="placeholderText"
        @input="$emit('update:modelValue', $event.target.value)"
      />

      <ButtonComponent arialLabel="View password" @click="togglePasswordVisibility">
        <EyeIcon />
      </ButtonComponent>
    </template>
  </label>
</template>

<script setup>
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
import SearchIcon from '@/atoms/icons/SearchIcon.vue'
import EyeIcon from '@/atoms/icons/EyeIcon.vue'
import { ref } from 'vue'

defineProps({
  placeholderText: String,
  searchButton: Boolean,
  ariaLabel: String,
  type: String,
  border: Boolean,
  value: String,
  id: String
})

const inputType = ref('password')

const togglePasswordVisibility = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
</script>

<style>
@import './InputComponent.scss';
</style>
