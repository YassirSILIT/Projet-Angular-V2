import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

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

}
