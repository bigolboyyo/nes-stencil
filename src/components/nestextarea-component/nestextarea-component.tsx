import { Component,  Prop,  h, Fragment } from '@stencil/core';

@Component({
  tag: 'nestextarea-component',
  styleUrl: 'nestextarea-component.css',
  // shadow: true,
})
export class NestextareaComponent {
  @Prop() label: string = "Textarea";

  render() {
    return (
      <Fragment>
        <label htmlFor="textarea_field">{this.label}</label>
        <textarea id="textarea_field" class="nes-textarea"></textarea>
      </Fragment>
    );
  }

}
