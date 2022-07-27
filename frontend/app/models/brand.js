import Model, { attr } from '@ember-data/model';

export default class BrandModel extends Model {
  @attr codigo;
  @attr nome;
}
