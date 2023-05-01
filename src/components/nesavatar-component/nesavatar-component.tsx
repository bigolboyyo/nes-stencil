import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'nesavatar-component',
  styleUrl: 'nesavatar-component.css',
})
export class NesavatarComponent {
  @Prop() src: string;
  @Prop() alt?: string;
  @Prop() isSmall?: boolean = false;
  @Prop() isMedium?: boolean = false;
  @Prop() isLarge?: boolean = false;
  @Prop() isRounded?: boolean = false;

  render() {
    const avatarClasses = ['nes-avatar', this.isSmall && 'is-small', this.isMedium && 'is-medium', this.isLarge && 'is-large', this.isRounded && 'is-rounded']
      .filter(Boolean)
      .join(' ');

    return <img class={avatarClasses} src={this.src} alt={this.alt} style={{ 'image-rendering': 'pixelated' }} />;
  }
}
