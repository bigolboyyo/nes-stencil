import { newE2EPage } from '@stencil/core/testing';

describe('nesprogress-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nesprogress-component></nesprogress-component>');

    const element = await page.find('nesprogress-component');
    expect(element).toHaveClass('hydrated');
  });
});
