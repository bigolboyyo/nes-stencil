import { newE2EPage } from '@stencil/core/testing';

describe('nesbutton-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nesbutton-component></nesbutton-component>');

    const element = await page.find('nesbutton-component');
    expect(element).toHaveClass('hydrated');
  });
});
