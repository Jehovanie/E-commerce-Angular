import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuthService } from 'src/app/services/auth__service/service-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public authService: ServiceAuthService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout()
      .subscribe(res => {
        if (!res.success) {
          this.router.navigate(['/home']);
        }
      })
  }
}
