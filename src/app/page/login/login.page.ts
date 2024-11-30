import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/service/firebase.service';
import { StorageService } from 'src/app/service/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email= ""
  password= ""
  tokenID: any = "";

  constructor(private firebase:FirebaseService, private router: Router, private alertcontroller:AlertController, private storage: StorageService) { }

  ngOnInit() {
  }

  async login(){
    try{
      let usuario=await this.firebase.auth(this.email,this.password);
      this.tokenID=await usuario.user?.getIdToken();
      console.log(usuario);
      console.log("TokenID", await usuario.user?.getIdToken());
      const NavigationExtras:NavigationExtras={
        queryParams: {email:this.email}
      };
      this.router.navigate(['/principal'], NavigationExtras);
      this.pruebaStorage();
    } catch(error){
      console.log(error);
      this.popalert();
    }
  }
  async popalert(){
    const alert = await this.alertcontroller.create({
      header: 'Error',
      message: 'Usuario o contraseña incorrecta',
      buttons: ['Ok']
    })
    await alert.present();
  }

  async pruebaStorage(){
    const jsonToken:any={
      token:this.tokenID
    }
    this.storage.agregarStorage(jsonToken);
    console.log(await this.storage.obtenerStorage)
  }
}
