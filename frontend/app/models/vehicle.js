import Model, { attr } from '@ember-data/model';

export default class VehicleModel extends Model {
  @attr brand;
  @attr licensePlate;
  @attr model;
  @attr version;
  @attr year;
  @attr createdAt;
  @attr updatedAt;
}
