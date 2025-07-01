import { Component, forwardRef, input, signal, computed } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type OnRegister = (value: string) => void;
type OnTouched = () => void;


@Component({
  selector: 'app-input-element',
  standalone: true,
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputElementComponent),
      multi: true,
    },
  ],
})
export class InputElementComponent implements ControlValueAccessor {
  readonly placeholder = input<string>('');
  readonly disabledInput = input<boolean>(false);
  private readonly internalDisabled = signal(false);
  value = signal('');

  // Use computed to determine the effective disabled state
  readonly disabled = computed(
    () => this.disabledInput() || this.internalDisabled()
  );

  onChange!: OnRegister;
  onTouched!:OnTouched;

  writeValue(value: string): void {
    this.value.set(value || '');
  }

  registerOnChange(fn: OnRegister): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouched): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.internalDisabled.set(isDisabled);
  }

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value.set(input.value);
    this.onChange(this.value());
  }
}
