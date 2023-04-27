import { newSpecPage } from '@stencil/core/testing';
import { NesradioComponent } from '../nesradio-component';

describe('nesradio-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NesradioComponent],
      html: `<nesradio-component></nesradio-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nesradio-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nesradio-component>
    `);
  });
});
