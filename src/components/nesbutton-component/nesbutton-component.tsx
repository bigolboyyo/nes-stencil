import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'nesbutton-component',
  styleUrl: 'nesbutton-component.css',
  // shadow: true,
})
export class NesbuttonComponent {
  @Prop() text?: string;
  @Prop() is?: "primary" | "success" | "warning" | "error" | "disabled" = undefined;
  @Prop() fileInput?: boolean = false;

render() {
  const buttonText = this.fileInput ? (this.text || "Upload") : (this.text || "Button");

  return this.fileInput ? (
    <label class={this.fileInput && this.is ? `nes-btn is-${this.is}` : 'nes-btn'}>
    <span>{buttonText}</span>
    {this.fileInput && <input type="file" />}
  </label>
  ) : (
    <button class={`nes-btn is-${this.is}`}>
      {buttonText}
    </button>
  );
  
  }
}
