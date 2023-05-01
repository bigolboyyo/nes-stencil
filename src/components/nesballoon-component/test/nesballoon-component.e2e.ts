import { newE2EPage } from '@stencil/core/testing';

describe('nesballoon-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nesballoon-component></nesballoon-component>');

    const element = await page.find('nesballoon-component');
    expect(element).toHaveClass('hydrated');
  });
});
