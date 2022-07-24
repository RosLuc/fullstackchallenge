import ApplicationAdapter from './application';
import ENV from 'frontend/config/environment';

export default class VehicleAdapter extends ApplicationAdapter {
  host = ENV.vehicleApi;
}
