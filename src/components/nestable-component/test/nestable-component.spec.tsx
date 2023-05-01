import { newSpecPage } from '@stencil/core/testing';
import { NestableComponent } from '../nestable-component';

describe('nestable-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NestableComponent],
      html: `<nestable-component></nestable-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nestable-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nestable-component>
    `);
  });
});
