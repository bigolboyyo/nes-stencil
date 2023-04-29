import { Component, h, Prop, Method, State, Element } from '@stencil/core';

@Component({
  tag: 'nesdialog-component',
  styleUrl: 'nesdialog-component.css',
})
export class NesdialogComponent {
  @Prop() isDark?: boolean = false;
  @Prop() isRounded?: boolean = false;
  @Prop() titleText?: string = 'Dialog';

  @State() isVisible: boolean = false;

  @Element() el: HTMLElement;

  @Method()
  async openDialog() {
    this.isVisible = true;
    document.body.style.overflow = 'hidden';
  }

  @Method()
  async closeDialog() {
    this.isVisible = false;
    document.body.style.overflow = '';
  }

  render() {
    const dialogClasses = ['nes-dialog', this.isDark && 'is-dark', this.isRounded && 'is-rounded'].filter(Boolean).join(' ');
    const overlayClasses = ['dialog-overlay', !this.isVisible && 'dialog-hidden'].filter(Boolean).join(' ');

    return (
      <div class={overlayClasses}>
        <div class={dialogClasses}>
          <form method="dialog">
            <p class="title">{this.titleText}</p>
            <slot />
            <menu class="dialog-menu">
              <slot name="menu" />
            </menu>
          </form>
        </div>
      </div>
    );
  }
}
