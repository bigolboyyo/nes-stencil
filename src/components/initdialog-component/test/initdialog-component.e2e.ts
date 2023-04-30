import { newE2EPage } from '@stencil/core/testing';

describe('initdialog-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<initdialog-component></initdialog-component>');

    const element = await page.find('initdialog-component');
    expect(element).toHaveClass('hydrated');
  });
});
