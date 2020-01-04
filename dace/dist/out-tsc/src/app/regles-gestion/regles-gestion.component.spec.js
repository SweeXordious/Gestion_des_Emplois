import { async, TestBed } from '@angular/core/testing';
import { ReglesGestionComponent } from './regles-gestion.component';
describe('ReglesGestionComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReglesGestionComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ReglesGestionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=regles-gestion.component.spec.js.map