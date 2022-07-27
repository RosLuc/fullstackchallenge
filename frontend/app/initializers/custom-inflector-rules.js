import Inflector from 'ember-inflector';

export function initialize() {
  const inflector = Inflector.inflector;

  inflector.uncountable('vehicle');
  inflector.irregular('brand', 'marcas');
}

export default {
  name: 'custom-inflector-rules',
  initialize,
};
