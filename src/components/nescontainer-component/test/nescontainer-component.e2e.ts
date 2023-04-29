import { newE2EPage } from '@stencil/core/testing';

describe('nescontainer-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nescontainer-component></nescontainer-component>');

    const element = await page.find('nescontainer-component');
    expect(element).toHaveClass('hydrated');
  });
});
