import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject } from '@ember/service';

export default class EditRoute extends Route {
  @inject store;
  @service router;

  model(params) {
    return this.store.findRecord('vehicle', params.id);
  }

  @action
  save() {
    this.currentModel.save().then(() => {
      this.router.transitionTo('index');
    });
  }

  // @action
  // cancel() {
  //   this.transitionTo('index');
  // }
}
