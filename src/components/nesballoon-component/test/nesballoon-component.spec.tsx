import { newSpecPage } from '@stencil/core/testing';
import { NesballoonComponent } from '../nesballoon-component';

describe('nesballoon-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NesballoonComponent],
      html: `<nesballoon-component></nesballoon-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nesballoon-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nesballoon-component>
    `);
  });
});
