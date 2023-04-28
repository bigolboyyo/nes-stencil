import { newE2EPage } from '@stencil/core/testing';

describe('nestextarea-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nestextarea-component></nestextarea-component>');

    const element = await page.find('nestextarea-component');
    expect(element).toHaveClass('hydrated');
  });
});
