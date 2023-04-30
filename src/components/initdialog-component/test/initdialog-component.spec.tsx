import { newSpecPage } from '@stencil/core/testing';
import { InitdialogComponent } from '../initdialog-component';

describe('initdialog-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InitdialogComponent],
      html: `<initdialog-component></initdialog-component>`,
    });
    expect(page.root).toEqualHtml(`
      <initdialog-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </initdialog-component>
    `);
  });
});
