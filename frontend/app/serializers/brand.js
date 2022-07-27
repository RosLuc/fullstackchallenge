import JSONSerializer from '@ember-data/serializer/json';

export default class BrandSerializer extends JSONSerializer {
  primaryKey = 'codigo';
}
