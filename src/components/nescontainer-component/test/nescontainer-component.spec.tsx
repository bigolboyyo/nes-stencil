import { newSpecPage } from '@stencil/core/testing';
import { NescontainerComponent } from '../nescontainer-component';

describe('nescontainer-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NescontainerComponent],
      html: `<nescontainer-component></nescontainer-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nescontainer-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nescontainer-component>
    `);
  });
});
