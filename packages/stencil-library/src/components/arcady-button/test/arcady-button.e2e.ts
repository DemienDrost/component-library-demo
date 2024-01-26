import { newE2EPage } from '@stencil/core/testing';

describe('arcady-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<arcady-button></arcady-button>');

    const element = await page.find('arcady-button');
    expect(element).toHaveClass('hydrated');
  });

  it('emits a click event', async () => {
    const page = await newE2EPage();
    await page.setContent('<arcady-button></arcady-button>');

    const button = await page.find('arcady-button');
    const spy = await button.spyOnEvent('click');

    await button.click();
    expect(spy).toHaveReceivedEvent();
  });
});
