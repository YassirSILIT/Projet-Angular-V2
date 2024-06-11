import { Component, OnInit } from '@angular/core';
//import { KeycloakService } from 'keycloak-angular';
//import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  actions : Array<any> = [
    {title : "Home", route : "/home", icon : "bi-house"},
    {title : "Customers", route : "/customers", icon : "bi-person-lines-fill"},
    {title : "Products", route : "/products", icon : "bi-card-list"}
  ];
  curretAction : any;

  setCurrentAction( action : any){
    this.curretAction = action;
  }


  public profile! : KeycloakProfile;

  constructor(public keycloakService : KeycloakService){}

  ngOnInit(): void {
      if(this.keycloakService.isLoggedIn()){
        this.keycloakService.loadUserProfile().then(pr=>{
          this.profile = this.profile;
        })
      }
  }

  async handleLogin(){
    await this.keycloakService.login({
      redirectUri : window.location.origin
    });
  }

  handleLogout(){
    this.keycloakService.logout(window.location.origin);
  }
*/

}
