<template>
  <div class="channels-list">
    <div class="channels-list__column">
      <div
        v-for="(channel, index) in firstColumnChannels"
        :key="'column1_' + index"
        class="channels-list__radio-button-block"
      >
        <RadioButton
          :id="'radioButton1_' + index"
          @update:selectedOption="selectedChannel = $event"
          :value="channel.name"
          name="channelSelection"
        >
          <component class="channels-list__icon" :is="channel.icon" />
          {{ channel.name }}
        </RadioButton>

        <InputComponent
          class="channels-list__input"
          v-if="selectedChannel === channel.name"
          :placeholderText="channel.placeholder"
        />
      </div>
    </div>

    <div class="channels-list__column">
      <div
        v-for="(channel, index) in secondColumnChannels"
        :key="'column2_' + index"
        class="channels-list__radio-button-block"
      >
        <RadioButton
          :id="'radioButton2_' + index"
          @update:selectedOption="selectedChannel = $event"
          :value="channel.name"
          name="channelSelection"
        >
          <component class="channels-list__icon" :is="channel.icon" />
          {{ channel.name }}
        </RadioButton>

        <InputComponent
          class="channels-list__input"
          v-if="selectedChannel === channel.name"
          :placeholderText="channel.placeholder"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue'
import DiscordIcon from '@/atoms/icons/DiscordIcon.vue'
import WhatsAppIcon from '@/atoms/icons/WhatsAppIcon.vue'
import RadioButton from '@/atoms/ui/RadioButtonComponent/RadioButton.vue'
import TelegramIcon from '@/atoms/icons/TelegramIcon.vue'
import ViberIcon from '@/atoms/icons/ViberIcon.vue'
import FacebookIcon from '@/atoms/icons/FacebookIcon.vue'
import SkypeIcon from '@/atoms/icons/SkypeIcon.vue'
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'

const channels = [
  { name: 'Discord', icon: DiscordIcon, placeholder: 'User ID' },
  { name: 'Skype', icon: SkypeIcon, placeholder: 'Skype ID' },
  { name: 'WhatsApp', icon: WhatsAppIcon, placeholder: 'WhatsApp ID' },
  { name: 'Telegram', icon: TelegramIcon, placeholder: 'User ID' },
  { name: 'Viber', icon: ViberIcon, placeholder: 'Viber ID' },
  { name: 'Facebook', icon: FacebookIcon, placeholder: 'User ID' }
]

const selectedChannel = shallowRef('null')

const midpoint = Math.ceil(channels.length / 2)
const firstColumnChannels = shallowRef(channels.slice(0, midpoint))
const secondColumnChannels = shallowRef(channels.slice(midpoint))
</script>

<style>
@import './ChannelRadioButtonsList.scss';
</style>
