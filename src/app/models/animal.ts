export class Animal {
  breed: string;
  img: string;
  description: string;

  constructor(item: any) {
    this.breed = item.breed || '';
    this.img = item.img || '';
    this.description = item.description || '';
  }
}
