import { newE2EPage } from '@stencil/core/testing';

describe('neslist-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<neslist-component></neslist-component>');

    const element = await page.find('neslist-component');
    expect(element).toHaveClass('hydrated');
  });
});
