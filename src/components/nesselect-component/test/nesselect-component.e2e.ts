import { newE2EPage } from '@stencil/core/testing';

describe('nesselect-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nesselect-component></nesselect-component>');

    const element = await page.find('nesselect-component');
    expect(element).toHaveClass('hydrated');
  });
});
