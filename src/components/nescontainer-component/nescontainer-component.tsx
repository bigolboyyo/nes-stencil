import { Component, h, Prop, Event, EventEmitter, State, Listen } from '@stencil/core';

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

  @Event() darkThemeChange: EventEmitter<Boolean>;
  @State() internalIsDark: boolean = false;

  componentWillLoad() {
    this.internalIsDark = this.isDark;
  }

  componentWillUpdate() {
    if (this.isDark !== this.internalIsDark) {
      this.internalIsDark = this.isDark;
      this.darkThemeChange.emit(this.isDark);
    }
  }

  @Listen('darkThemeChange', { target: 'body' })
  onDarkThemeChange(event: CustomEvent<boolean>) {
    if (this.isDark === undefined || this.isDark === null) {
      this.internalIsDark = event.detail;
    }
  }

  render() {
    const containerClasses = ['nes-container', this.titleText && 'with-title', this.isCentered && 'is-centered', this.internalIsDark && 'is-dark', this.isRounded && 'is-rounded']
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
