import { Component, OnInit } from '@angular/core';
import { animals } from 'src/assets/animal-data/animal-list';
import { Animal } from '../models/animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent implements OnInit {
  animals: Animal[] = animals;
  constructor() {}

  ngOnInit(): void {}
}
