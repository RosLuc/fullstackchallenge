import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject } from '@ember/service';

export default class CarFormComponent extends Component {
  @service carApi;
  @service router;
  @inject store;

  @tracked carInfo = {
    brand: '',
    licensePlate: '',
    model: '',
    version: '',
    year: 2022,
  };
  @tracked brands;
  @tracked models;

  constructor() {
    super(...arguments);
    fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas').then(
      async (response) => {
        this.brands = await response.json();
      }
    );
  }

  @action
  changeProps(event) {
    this.carInfo = { ...this.carInfo, [event.target.name]: event.target.value };
    if (event.target.name === 'brand') {
      fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${this.carInfo.brand}/modelos`
      ).then(async (response) => {
        const body = await response.json();
        console.log(body);
        this.models = body.modelos;
      });
    }
  }

  @action
  async submitForm(event) {
    event.preventDefault();
    try {
      const newVehicle = await this.store.createRecord('vehicle', {
        brand: this.carInfo.brand,
        licensePlate: this.carInfo.licensePlate,
        model: this.carInfo.model,
        version: this.carInfo.version,
        year: parseInt(this.carInfo.year),
      });

      await newVehicle.save();

      this.router.transitionTo('/');

      alert('Carro registrado com sucesso');
    } catch (error) {
      alert('Erro ao adicionar o carro');
    }
  }
}
