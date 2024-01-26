import { Component, Host, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'arcady-button',
  styleUrl: 'arcady-button.scss',
  shadow: true,
})
export class ArcadyButton {
  @Event() buttonClick: EventEmitter<MouseEvent>;

  @Prop() name: string;
  @Prop() variant: 'primary' | 'secondary' | 'ghost';
  @Prop() type: string;
  @Prop() disabled: boolean;

  render() {
    return (
      <Host>
        <button onClick={_ => this.buttonClick.emit()} data-variant={this.variant} name={this.name} type={this.type} disabled={this.disabled}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
