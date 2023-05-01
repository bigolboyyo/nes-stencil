import { newSpecPage } from '@stencil/core/testing';
import { NesavatarComponent } from '../nesavatar-component';

describe('nesavatar-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NesavatarComponent],
      html: `<nesavatar-component></nesavatar-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nesavatar-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nesavatar-component>
    `);
  });
});
