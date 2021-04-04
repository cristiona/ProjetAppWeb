import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePlaylistComponent } from './liste-playlist.component';

describe('ListePlaylistComponent', () => {
  let component: ListePlaylistComponent;
  let fixture: ComponentFixture<ListePlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePlaylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
