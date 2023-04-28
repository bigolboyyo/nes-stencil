import { newSpecPage } from '@stencil/core/testing';
import { NestextareaComponent } from '../nestextarea-component';

describe('nestextarea-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NestextareaComponent],
      html: `<nestextarea-component></nestextarea-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nestextarea-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nestextarea-component>
    `);
  });
});
