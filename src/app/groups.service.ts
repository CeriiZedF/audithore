import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  groups = [
    {
      name : 'P-10',
      numOfStudents : 10,
      faculty : 'Biological Faculty',
    },
    {
      name : 'P-11',
      numOfStudents : 15,
      faculty : 'Mathematical Faculty',
    },
    {
      name : 'P-12',
      numOfStudents : 9,
      faculty : 'Computer Science Faculty',
    },
    {
      name : 'P-13',
      numOfStudents : 14,
      faculty : 'Chemical Faculty',
    },
  ];
}
