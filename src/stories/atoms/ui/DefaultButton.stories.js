import DefaultButton from "@/components/atoms/ui/DefaultButton/DefaultButton.vue";

export default {
  title: 'Components/DefaultButton',
  component: DefaultButton,
  argTypes: {
    click: { action: 'clicked' }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DefaultButton },
  template: '<DefaultButton>Catalog</DefaultButton>',
});

export const Primary = Template.bind({});
