import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewMapWebPage } from './view-map-web.page';

describe('ViewMapWebPage', () => {
  let component: ViewMapWebPage;
  let fixture: ComponentFixture<ViewMapWebPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMapWebPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMapWebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
