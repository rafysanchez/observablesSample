import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { IUser } from './IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {

  protected title = 'app';
  protected users$: Observable<IUser[]>;

  constructor(public userservice: UserService) {}

  ngOnInit() {

     this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
    });
  }

  ngOnDestroy() {
  // this.users$.unsubscribe();
}

}
