import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  readonly variant = input<'primary' | 'secondary'>('primary');
  readonly disabled = input<boolean>(false);
  readonly ariaLabel = input<string>('Button');

  readonly classes = computed(() => {
    return [
      'app-button',
      `app-button--${this.variant()}`,
      this.disabled() ? 'app-button--disabled' : '',
    ].join(' ');
  });

  readonly clicked = output<void>();

  handleClick() {
    if (!this.disabled()) {
      this.clicked.emit();
    }
  }
}
