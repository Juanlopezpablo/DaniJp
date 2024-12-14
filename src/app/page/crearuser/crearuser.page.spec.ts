import { ComponentFixture, TestBed } from '@angular/core/testing';
import { crearuserpage } from './crearuser.page';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment'; // Asegúrate de tener esta importación para usar la configuración de Firebase
import { AngularFireModule } from '@angular/fire/compat';

describe('CrearuserPage', () => {
  let component: crearuserpage;
  let fixture: ComponentFixture<crearuserpage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializa Firebase con la configuración
        AngularFireAuthModule  // Importa AngularFireAuthModule para la autenticación
      ],
      declarations: [crearuserpage] // Declara el componente que estás probando
    }).compileComponents();

    fixture = TestBed.createComponent(crearuserpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
