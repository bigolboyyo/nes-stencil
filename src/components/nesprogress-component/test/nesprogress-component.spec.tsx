import { newSpecPage } from '@stencil/core/testing';
import { NesprogressComponent } from '../nesprogress-component';

describe('nesprogress-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NesprogressComponent],
      html: `<nesprogress-component></nesprogress-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nesprogress-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nesprogress-component>
    `);
  });
});
