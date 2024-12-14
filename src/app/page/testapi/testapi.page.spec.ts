import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestapiPage } from './testapi.page';
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule
import { ApiService } from 'src/app/service/api.service'; // Importa ApiService
import { IonicModule } from '@ionic/angular';  // Importa IonicModule si usas Ionic

describe('TestapiPage', () => {
  let component: TestapiPage;
  let fixture: ComponentFixture<TestapiPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),  // Asegúrate de importar IonicModule si usas Ionic
        HttpClientModule       // Asegúrate de importar HttpClientModule
      ],
      providers: [ApiService],  // Proporciona ApiService para inyectar en el entorno de pruebas
      declarations: [TestapiPage]  // Declara el componente que estás probando
    }).compileComponents();

    fixture = TestBed.createComponent(TestapiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();  // Verifica que el componente se haya creado correctamente
  });
});
