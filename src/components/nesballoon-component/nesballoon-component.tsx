import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'nesballoon-component',
  styleUrl: 'nesballoon-component.css',
})
export class NesballoonComponent {
  @Prop() fromLeft?: boolean = false;
  @Prop() fromRight?: boolean = false;
  @Prop() isDark?: boolean = false;
  @Prop() imgSwap?: boolean = false;
  @Prop() messageStyle?: string = undefined;
  @Prop() containerStyle?: string = undefined;

  render() {
    const balloonClasses = ['nes-balloon', this.fromLeft && 'from-left', this.fromRight && 'from-right'].filter(Boolean).join(' ');
    const messageDirection = ['message', this.fromLeft && '-left', this.fromRight && '-right'].filter(Boolean).join(' ');

    const messageStyle = this.messageStyle ? JSON.parse(this.messageStyle) : {};
    const containerStyle = this.containerStyle ? JSON.parse(this.containerStyle) : {};

    return (
      <section class={this.isDark ? 'nes-container is-dark' : 'nes-container'} style={containerStyle}>
        <section class="message-list">
          <section class={messageDirection} style={messageStyle}>
            {this.imgSwap && <i class="nes-bcrikko"></i>}
            <div class={balloonClasses}>
              <slot />
            </div>
            {!this.imgSwap && <i class="nes-bcrikko"></i>}
          </section>
        </section>
      </section>
    );
  }
}
