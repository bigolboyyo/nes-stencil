import { newE2EPage } from '@stencil/core/testing';

describe('nespointer-hoc', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nespointer-hoc></nespointer-hoc>');

    const element = await page.find('nespointer-hoc');
    expect(element).toHaveClass('hydrated');
  });
});
