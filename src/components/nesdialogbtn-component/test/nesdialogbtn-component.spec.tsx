import { newSpecPage } from '@stencil/core/testing';
import { NesdialogbtnComponent } from '../nesdialogbtn-component';

describe('nesdialogbtn-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NesdialogbtnComponent],
      html: `<nesdialogbtn-component></nesdialogbtn-component>`,
    });
    expect(page.root).toEqualHtml(`
      <nesdialogbtn-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nesdialogbtn-component>
    `);
  });
});
