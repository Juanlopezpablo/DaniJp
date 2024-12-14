import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApitestPage } from './apitest.page';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { ApiService } from 'src/app/service/api.service';  // Asegúrate de importar ApiService
import { IonicModule } from '@ionic/angular';  // Importa IonicModule si usas Ionic

describe('ApitestPage', () => {
  let component: ApitestPage;
  let fixture: ComponentFixture<ApitestPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),  // Asegúrate de importar IonicModule si usas Ionic
        HttpClientModule       // Asegúrate de importar HttpClientModule
      ],
      providers: [ApiService],  // Proporciona ApiService en el entorno de pruebas
      declarations: [ApitestPage]  // Declara el componente
    }).compileComponents();

    fixture = TestBed.createComponent(ApitestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Verifica que el componente se haya creado correctamente
  });
});
