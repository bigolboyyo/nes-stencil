import { newE2EPage } from '@stencil/core/testing';

describe('nesradio-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nesradio-component></nesradio-component>');

    const element = await page.find('nesradio-component');
    expect(element).toHaveClass('hydrated');
  });
});
