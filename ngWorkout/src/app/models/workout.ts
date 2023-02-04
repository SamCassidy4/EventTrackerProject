export class Workout {
  id: number;
  name: string;
  set: string;
  rep: string;
  description: string;
  imageUrl: string;
  bodyPart: string;

  constructor(id: number = 0,name: string='', set: string='', rep: string='', description: string='',
  imageUrl: string='', bodyPart: string=''){
    this.id = id;
    this.name = name;
    this.set = set;
    this.rep = rep;
    this.description = description;
    this.imageUrl = imageUrl;
    this.bodyPart = bodyPart;
  }
}
