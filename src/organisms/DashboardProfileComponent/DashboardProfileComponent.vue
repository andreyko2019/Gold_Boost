<template>
  <div class="profile">
    <div class="profile__email-block">
      <table class="profile__email-table">
        <thead>
          <tr>
            <th class="profile__email-table-title">Email</th>

            <th class="profile__email-table-title">Name</th>

            <th class="profile__email-table-title">Surname</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td class="profile__email-table-value">parivitaligorovich@gmail.com</td>

            <td class="profile__email-table-value">Vitaly</td>

            <td class="profile__email-table-value">Pariy</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="profile__payments-methods">
      <h2 class="profile__title">Favorite payment method</h2>

      <payment-list-component class="profile__payments-list" />
    </div>

    <div class="profile__communication-channels">
      <h2 class="profile__title">Favorite payment method</h2>

      <ChannelRadioButtonsList class="profile__channels-list" />
    </div>

    <div class="profile__notification">
      <h2 class="profile__title">Notifications</h2>

      <CheckboxComponent class="profile__checkbox">
        <span class="profile__checkbox-text">
          Receive notifications about promotions and news by mail.
        </span>
      </CheckboxComponent>
    </div>

    <ButtonComponent class="profile__button" rectangle>save</ButtonComponent>
  </div>
</template>

<script setup>
import PaymentListComponent from '@/molecules/PaymentListComponent/PaymentListComponent.vue'
import ChannelRadioButtonsList from '@/molecules/ChannelRadioButtonsList/ChannelRadioButtonsList.vue'
import CheckboxComponent from '@/atoms/ui/CheckboxComponent/CheckboxComponent.vue'
import ButtonComponent from '@/atoms/ui/ButtonComponent/ButtonComponent.vue'
</script>

<style>
@import './DashboardProfileComponent.scss';
</style>
