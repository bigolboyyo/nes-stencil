import { newE2EPage } from '@stencil/core/testing';

describe('nestext-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nestext-component></nestext-component>');

    const element = await page.find('nestext-component');
    expect(element).toHaveClass('hydrated');
  });
});
