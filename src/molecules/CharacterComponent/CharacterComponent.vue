<template>
  <div class="character-block">
    <div class="character-block__item character-block__item-battleTag">
      <label class="character-block__item-label" for="BattleTag">
        BattleTag
        <InputComponent class="character-block__item-input" id="BattleTag" />
      </label>
    </div>

    <div class="character-block__item character-block__item-class">
      <label class="character-block__item-label" for="Class and Spec">
        Class and Spec
        <InputComponent class="character-block__item-input" id="Class and Spec" />
      </label>
    </div>

    <div class="character-block__item character-block__item-character-name">
      <label class="character-block__item-label" for="Character Name">
        Character Name
        <InputComponent class="character-block__item-input" id="Character Name" />
      </label>
    </div>

    <div class="character-block__item character-block__item-faction">
      <label class="character-block__item-label" for="Faction">
        Faction
        <InputComponent class="character-block__item-input" id="Faction" />
      </label>
    </div>

    <div class="character-block__item character-block__item-realm">
      <label class="character-block__item-label" for="Realm">
        Realm
        <InputComponent class="character-block__item-input" id="Realm" />
      </label>
    </div>

    <div class="character-block__item character-block__item-additional">
      <label class="character-block__item-label" for="Additional Info">
        Additional Info
        <InputComponent class="character-block__item-input" id="Additional Info" />

        <InputComponent
          class="character-block__item-input"
          id="Additional Info 2"
          ariaLabel="Additional Info 2"
        />
      </label>
    </div>

    <div class="character-block__item character-block__item-button">
      <ButtonComponent
        v-if="visibleCharacters === index && index !== maxCharacters"
        rectangle
        @click="addCharacter()"
        >Add a character ({{ maxCharacters - index }})
      </ButtonComponent>

      <ButtonComponent
        class="character-block__item-button-delete"
        v-else
        rectangle
        @click="deleteCharacter()"
      >
        delete a character
      </ButtonComponent>
    </div>
  </div>
</template>

<script setup>
import InputComponent from '@/atoms/ui/InputComponent/InputComponent.vue'
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'

const props = defineProps({
  button: Boolean,
  maxCharacters: Number,
  index: Number
})

const visibleCharacters = defineModel()

const addCharacter = () => {
  if (visibleCharacters.value < props.maxCharacters) {
    visibleCharacters.value++
  }
}

const deleteCharacter = () => {
  if (visibleCharacters.value > 0) {
    visibleCharacters.value--
  }
}
</script>

<style>
@import './CharacterComponent.scss';
</style>
