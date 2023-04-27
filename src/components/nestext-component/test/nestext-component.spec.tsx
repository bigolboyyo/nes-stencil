import { newSpecPage } from '@stencil/core/testing';
import { NestextComponent } from '../nestext-component';

describe('nestext-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NestextComponent],
      html: `<nestext-component></nestext-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nestext-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nestext-component>
    `);
  });
});
