import { newSpecPage } from '@stencil/core/testing';
import { NesdialogComponent } from '../nesdialog-component';

describe('nesdialog-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NesdialogComponent],
      html: `<nesdialog-component></nesdialog-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nesdialog-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nesdialog-component>
    `);
  });
});
