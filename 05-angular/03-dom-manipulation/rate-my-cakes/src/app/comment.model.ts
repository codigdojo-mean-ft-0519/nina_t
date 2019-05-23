import { Cake } from './cake.model';

export class Comement {
  _id: number;
  baker: string;
  stars = 0;
  cakeid: Cake['_id'];
  createdAt: number;
  updatedAt: number;
}
