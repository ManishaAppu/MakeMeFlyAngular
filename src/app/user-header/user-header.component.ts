import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  logout():void{
    console.log("inside of header logout");
        this.auth.logout();
  }

}
