<template>
  <button :class="`button button_transparent-circle button_transparent-text`">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style>
@import './TransparentButton.scss';
</style>
