import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject } from '@ember/service';

export default class CarFormComponent extends Component {
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
  @tracked brandCode = '';
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
    if (event.target.name === 'brand') {
      const brandArray = event.target.value.split('-');
      console.log(brandArray[1]);
      this.carInfo = {
        ...this.carInfo,
        [event.target.name]: event.target.value,
      };
      this.brandCode = brandArray[0];
      fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${this.brandCode}/modelos`
      ).then(async (response) => {
        const body = await response.json();
        this.models = body.modelos;
      });
    } else {
      this.carInfo = {
        ...this.carInfo,
        [event.target.name]: event.target.value,
      };
    }
  }

  @action
  async submitForm(event) {
    event.preventDefault();
    try {
      const newVehicle = await this.store.createRecord('vehicle', {
        brand: this.carInfo.brand.split('-')[1],
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
