export default {
  title: 'Components/ArcadyButton',
};

const Template = args => `<arcady-button name="${args.name}" variant="${args.variant}" type="${args.type}" disabled="${args.disabled}">${args.slot}</<arcady-button>`;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  slot: `Primary Button`,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  slot: `Secondary Button`,
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  slot: `Ghost Button`,
};
