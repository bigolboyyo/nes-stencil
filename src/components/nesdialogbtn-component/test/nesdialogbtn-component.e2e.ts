import { newE2EPage } from '@stencil/core/testing';

describe('nesdialogbtn-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nesdialogbtn-component></nesdialogbtn-component>');

    const element = await page.find('nesdialogbtn-component');
    expect(element).toHaveClass('hydrated');
  });
});
