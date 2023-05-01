import { newE2EPage } from '@stencil/core/testing';

describe('nesavatar-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nesavatar-component></nesavatar-component>');

    const element = await page.find('nesavatar-component');
    expect(element).toHaveClass('hydrated');
  });
});
