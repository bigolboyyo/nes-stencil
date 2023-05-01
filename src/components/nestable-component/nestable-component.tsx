import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'nestable-component',
  styleUrl: 'nestable-component.css',
})
export class NestableComponent {
  @Prop() isBordered?: boolean = false;
  @Prop() isCentered?: boolean = false;
  @Prop() isDark?: boolean = false;
  @Prop() headers: string = '[]';
  @Prop() rows: string = '[]';

  @State() parsedHeaders: string[] = [];
  @State() parsedRows: string[][] = [];

  componentWillLoad() {
    this.parsedHeaders = JSON.parse(this.headers);
    this.parsedRows = JSON.parse(this.rows);
  }

  render() {
    const tableClasses = ['nes-table', this.isBordered && 'is-bordered', this.isCentered && 'is-centered', this.isDark && 'is-dark'].filter(Boolean).join(' ');

    return (
      <div class="nes-table-responsive">
        <table class={tableClasses}>
          <thead>
            <tr>
              {this.parsedHeaders.map(header => (
                <th>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.parsedRows.map(row => (
              <tr>
                {row.map(cell => (
                  <td>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
