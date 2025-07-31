import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent implements OnInit {
  users: any[] = [];
  headers: string[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      if (data.length > 0) {
        this.headers = Object.keys(data[0]);
      }
    });
  }

  onRowClick(user: any): void {
    debugger;
    this.router.navigate(['/user', user.id]);
  }
handleRowClick(event: Event, user: any): void {
  const target = event.target as HTMLElement;
  if (target.tagName.toLowerCase() !== 'input') {
    this.onRowClick(user);
  }
}

  updateValue(event: Event, rowIndex: number, key: string): void {
    const input = event.target as HTMLInputElement;
    this.users[rowIndex][key] = input.value;
  }
}
