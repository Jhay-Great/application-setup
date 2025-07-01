import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit clicked when button is clicked and not disabled', () => {
    spyOn(component.clicked, 'emit');
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    expect(component.clicked.emit).toHaveBeenCalled();
  });

  it('should not emit clicked when button is disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    spyOn(component.clicked, 'emit');
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    expect(component.clicked.emit).not.toHaveBeenCalled();
  });

  it('should apply correct variant class', () => {
    fixture.componentRef.setInput('variant', 'secondary');
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.classList).toContain('app-button--secondary');
  });

  it('should set aria-label', () => {
    fixture.componentRef.setInput('ariaLabel', 'My Button');
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.getAttribute('aria-label')).toBe('My Button');
  });
});
