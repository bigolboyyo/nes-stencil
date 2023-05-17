import { newSpecPage } from '@stencil/core/testing';
import { NespointerHoc } from '../nespointer-hoc';

describe('nespointer-hoc', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NespointerHoc],
      html: `<nespointer-hoc></nespointer-hoc>`,
    });
    expect(page.root).toEqualHtml(`
      <nespointer-hoc>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nespointer-hoc>
    `);
  });
});
