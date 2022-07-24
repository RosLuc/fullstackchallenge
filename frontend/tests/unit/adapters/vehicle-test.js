import { module, test } from 'qunit';
import { setupTest } from 'frontend/tests/helpers';

module('Unit | Adapter | vehicle', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:vehicle');
    assert.ok(adapter);
  });
});
