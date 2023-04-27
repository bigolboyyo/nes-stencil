import { newE2EPage } from '@stencil/core/testing';

describe('nescheckbox-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nescheckbox-component></nescheckbox-component>');

    const element = await page.find('nescheckbox-component');
    expect(element).toHaveClass('hydrated');
  });
});
