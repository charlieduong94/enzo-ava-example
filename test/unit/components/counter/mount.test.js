/**
 * These tests ensure that the component functions
 * the way we expect it to when rendered
 */

const test = require('ava')

const { mount } = require('enzo')
const generateRandomNumber = require('../../../helpers/generateRandomNumber')

const componentPath =
  require.resolve('../../../../src/components/counter/index.marko')

/**
 * Create a fresh component instance before each test
 */
test.beforeEach(async (t) => {
  const { component } = await mount(componentPath)
  t.context = { component }
})

/**
 * Destroys the component and the jsdom instance that
 * is created
 */
test.afterEach((t) => {
  const { component } = t.context
  component.destroy()
})

test('should default to setting the state\'s count to zero', async (t) => {
  t.plan(1)

  const { component } = t.context
  t.is(component.state.count, 0)
})

test('should increment the count when #increment is invoked', (t) => {
  t.plan(1)

  const { component } = t.context
  const { count: oldCount } = component.state

  component.increment()

  t.is(component.state.count, oldCount + 1)
})

test('should decrement the count when #decrement is invoked', (t) => {
  t.plan(1)

  const { component } = t.context
  const { count: oldCount } = component.state

  component.decrement()

  t.is(component.state.count, oldCount - 1)
})
