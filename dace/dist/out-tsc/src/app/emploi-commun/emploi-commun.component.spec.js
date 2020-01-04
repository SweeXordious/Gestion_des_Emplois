import { async, TestBed } from '@angular/core/testing';
import { EmploiCommunComponent } from './emploi-commun.component';
describe('EmploiCommunComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EmploiCommunComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(EmploiCommunComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=emploi-commun.component.spec.js.map