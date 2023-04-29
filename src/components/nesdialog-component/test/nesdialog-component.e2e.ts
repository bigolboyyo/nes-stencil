import { newE2EPage } from '@stencil/core/testing';

describe('nesdialog-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nesdialog-component></nesdialog-component>');

    const element = await page.find('nesdialog-component');
    expect(element).toHaveClass('hydrated');
  });
});
