/**
 * This test ensures that the component sets the
 * correct state upon initialization
 */

const test = require('ava')

const { mount } = require('enzo')
const generateRandomNumber = require('../../../helpers/generateRandomNumber')

const componentPath =
  require.resolve('../../../../src/components/counter/index.marko')

test('should set the state\'s count to the input count upon creation', async (t) => {
  t.plan(1)

  const inputCount = generateRandomNumber()
  const { component } = await mount(componentPath, {
    count: inputCount
  })

  t.is(component.state.count, inputCount)
})

