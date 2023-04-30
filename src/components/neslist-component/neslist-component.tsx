import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'neslist-component',
  styleUrl: 'neslist-component.css',
})
export class NeslistComponent {
  @Prop() isFilled?: boolean = false;
  @Prop() isDark?: boolean = false;
  @State() internalIsDark: boolean = false;

  componentWillLoad() {
    this.internalIsDark = this.isDark;
  }

  componentWillUpdate() {
    if (this.isDark !== this.internalIsDark) {
      this.internalIsDark = this.isDark;
    }
  }

  render() {
    const filled = this.isFilled ? 'is-disc' : 'is-circle';
    const themeClass = this.internalIsDark ? 'dark-theme' : '';

    return (
      <div class={`lists ${themeClass}`}>
        <ul class={`nes-list ${filled}`}>
          <slot />
        </ul>
      </div>
    );
  }
}
