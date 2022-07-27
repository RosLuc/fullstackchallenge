import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject } from '@ember/service';

export default class CarCardComponent extends Component {
  @service router;
  @inject store;
  @tracked brands;
  @tracked models;

  constructor() {
    super(...arguments);
  }

  @action
  async deleteVehicle(vehicleId) {
    try {
      const vehicle = await this.store.peekRecord('vehicle', vehicleId);

      await vehicle.deleteRecord();
      await vehicle.save();

      this.router.transitionTo('/');

      alert('Carro removido com sucesso');
    } catch (error) {
      alert('Erro ao remover o carro');
    }
  }
}
