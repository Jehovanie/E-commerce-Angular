import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/IUser';
import { DataService } from 'src/app/services/data__service/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  private _users!: IUser[]

  constructor(private dataService$: DataService) { }

  ngOnInit(): void {

    this.dataService$.getAllData().subscribe({
      next: data => this._users = data.users,
      complete: () => console.log("Get user finised ...")
    })

  }

  get getUsers(): IUser[] {
    return this._users;
  }

}
