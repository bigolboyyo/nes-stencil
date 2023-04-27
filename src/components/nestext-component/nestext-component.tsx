import { Component, h,  Prop } from '@stencil/core';

@Component({
  tag: 'nestext-component',
  styleUrl: 'nestext-component.css',
  // shadow: true,
})
export class NestextComponent {
  
  @Prop() text: string = "Hello World!";
  @Prop() is?: "primary" | "success" | "warning" | "error" | "disabled" = "primary";
  @Prop() element?: keyof HTMLElementTagNameMap = "span";
  @Prop() options?: string;
  
  render() {
    const attrs = this.options ? JSON.parse(this.options) : {};

    return (
        <this.element class={`nes-text is-${this.is}`} {...attrs}>
          {this.text}
        </this.element>
    );
  }
}
