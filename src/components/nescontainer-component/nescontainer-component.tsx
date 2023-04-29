import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'nescontainer-component',
  styleUrl: 'nescontainer-component.css',
})
export class NescontainerComponent {
  @Prop() isCentered?: boolean = false;
  @Prop() isDark?: boolean = false;
  @Prop() isRounded?: boolean = false;
  @Prop() titleText?: string = undefined;
  @Prop() containerStyle?: string;

  render() {
    const containerClasses = ['nes-container', this.titleText && 'with-title', this.isCentered && 'is-centered', this.isDark && 'is-dark', this.isRounded && 'is-rounded']
      .filter(Boolean)
      .join(' ');

    return (
      <div class={containerClasses} style={this.containerStyle ? JSON.parse(this.containerStyle) : undefined}>
        {this.titleText ? <p class="title">{this.titleText}</p> : undefined}
        <slot />
      </div>
    );
  }
}
