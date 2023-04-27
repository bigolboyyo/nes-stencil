import { newSpecPage } from '@stencil/core/testing';
import { NesbuttonComponent } from '../nesbutton-component';

describe('nesbutton-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NesbuttonComponent],
      html: `<nesbutton-component></nesbutton-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nesbutton-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nesbutton-component>
    `);
  });
});
