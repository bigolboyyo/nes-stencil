import { newSpecPage } from '@stencil/core/testing';
import { NesselectComponent } from '../nesselect-component';

describe('nesselect-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NesselectComponent],
      html: `<nesselect-component></nesselect-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nesselect-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nesselect-component>
    `);
  });
});
