import { newE2EPage } from '@stencil/core/testing';

describe('nesinput-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nesinput-component></nesinput-component>');

    const element = await page.find('nesinput-component');
    expect(element).toHaveClass('hydrated');
  });
});
