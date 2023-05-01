import { newE2EPage } from '@stencil/core/testing';

describe('nestable-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nestable-component></nestable-component>');

    const element = await page.find('nestable-component');
    expect(element).toHaveClass('hydrated');
  });
});
