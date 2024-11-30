import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { UserModel } from 'src/app/models/usuario';
import { ApiService } from 'src/app/service/api.service';
import { FirebaseService } from 'src/app/service/firebase.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  email: string = "";  // Almacenamos el email
  usuario: UserModel[] = [];  // Almacenamos los datos del usuario
  vehiculos: any[] = [];  // Almacenamos los vehículos obtenidos

  constructor(
    private firebase: FirebaseService,
    private router: Router,
    private activate: ActivatedRoute,
    private storage: StorageService,
    private apiservice: ApiService
  ) { 
    // Obtenemos los parámetros de la ruta, como el email del usuario
    this.activate.queryParams.subscribe(params => {
      this.email = params['email'];
      console.log(this.email);
    });
  }

  ngOnInit() {
    this.cargarUsuario();  // Cargar datos del usuario cuando se inicia la página
  }

  // Método de logout que elimina la sesión del usuario y navega a la página de login
  async logout() {
    await this.firebase.logout();  // Cerrar sesión
    this.router.navigateByUrl("login");  // Redirigir al login
  }

  // Método para cargar los datos del usuario desde el storage y luego hacer la consulta
  async cargarUsuario() {
    let dataStorage = await this.storage.obtenerStorage();  // Obtener datos de storage
    const req = await this.apiservice.obtenerUsuario(
      {
        p_correo: this.email,
        token: dataStorage[0].token
      }
    );
    this.usuario = req.data;  // Asignamos la respuesta al array de usuario
    console.log("DATA INICIO USUARIO ", this.usuario);
  }

  // Método para navegar a la página de registrar vehículo
  async btnRegistrarVehiculo() {
    const navigationExtras: NavigationExtras = {
      queryParams: { email: this.email }  // Pasamos el email como parámetro
    };
    this.router.navigate(['/agregar-vehiculo'], navigationExtras);  // Navegar a la página de registro de vehículo
  }

  // Método para obtener los vehículos desde la API
  async btnObtenerVehiculos() {
    this.vehiculos = await this.apiservice.obtenerVehiculo();  // Obtenemos los vehículos
  }
}
