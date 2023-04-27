import { newSpecPage } from '@stencil/core/testing';
import { NescheckboxComponent } from '../nescheckbox-component';

describe('nescheckbox-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NescheckboxComponent],
      html: `<nescheckbox-component></nescheckbox-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nescheckbox-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nescheckbox-component>
    `);
  });
});
