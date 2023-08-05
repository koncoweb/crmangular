import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxTabsModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxAccordionModule, IgxExpansionPanelModule, IgxAvatarModule, IgxCheckboxModule, IgxListModule, IgxChipsModule } from 'igniteui-angular';
import { AccountSampleComponent } from './account-sample.component';

describe('AccountSampleComponent', () => {
  let component: AccountSampleComponent;
  let fixture: ComponentFixture<AccountSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSampleComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxTabsModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxAccordionModule, IgxExpansionPanelModule, IgxAvatarModule, IgxCheckboxModule, IgxListModule, IgxChipsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
