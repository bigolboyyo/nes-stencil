import { newSpecPage } from '@stencil/core/testing';
import { NeslistComponent } from '../neslist-component';

describe('neslist-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NeslistComponent],
      html: `<neslist-component></neslist-component>`,
    });
    expect(page.root).toEqualHtml(`
      <neslist-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </neslist-component>
    `);
  });
});
