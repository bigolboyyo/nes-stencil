import { newSpecPage } from '@stencil/core/testing';
import { NesinputComponent } from '../nesinput-component';

describe('nesinput-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NesinputComponent],
      html: `<nesinput-component></nesinput-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nesinput-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nesinput-component>
    `);
  });
});
