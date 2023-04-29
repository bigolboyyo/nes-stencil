import { Component, Fragment, Prop, h } from '@stencil/core';

@Component({
  tag: 'nesselect-component',
  styleUrl: 'nesselect-component.css',
  // shadow: true,
})
export class NesselectComponent {
  @Prop() label?: string = 'Default';
  @Prop() fieldType?: 'default' | 'success' | 'warning' | 'error' | 'dark' = 'default';
  @Prop() options?: string;
  @Prop() attrs?: string;

  render() {
    let statusClass: string;
    let parsedOptions = this.options
      ? JSON.parse(this.options)
      : [
          { value: '0', text: 'To be' },
          { value: '1', text: 'Not to be' },
        ];

    let attrs = this.attrs ? JSON.parse(this.attrs) : {};

    switch (this.fieldType) {
      case 'success':
        statusClass = 'nes-select is-success';
        break;
      case 'warning':
        statusClass = 'nes-select is-warning';
        break;
      case 'error':
        statusClass = 'nes-select is-error';
        break;
      case 'dark':
        statusClass = 'nes-select is-dark';
        break;
      default:
        statusClass = 'nes-select';
    }

    return this.fieldType !== 'dark' ? (
      <Fragment>
        <label htmlFor={`${this.fieldType}_select`} {...attrs}>
          {this.label}
        </label>
        <div class={statusClass}>
          <select required id={`${this.fieldType}_select`} disabled={attrs.disabled}>
            <option value="" disabled selected hidden>
              Select...
            </option>
            {parsedOptions.map((option: { value: string | number | string[]; text: any }) => (
              <option value={option.value}>{option.text}</option>
            ))}
          </select>
        </div>
      </Fragment>
    ) : (
      <div style={{ backgroundColor: '#212529', color: 'white', padding: '1rem 1.2rem 1rem 1rem', width: '100%' }}>
        <label htmlFor={`${this.fieldType}_select`} {...attrs}>
          {this.label}
        </label>
        <div class={statusClass}>
          <select required id={`${this.fieldType}_select`} disabled={attrs.disabled}>
            <option value="" disabled selected hidden>
              Select...
            </option>
            {parsedOptions.map((option: { value: string | number | string[]; text: any }) => (
              <option value={option.value}>{option.text}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
