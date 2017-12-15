/**
 * These tests ensure that the counter component is rendering correctly
 */

const test = require('ava')

const { render } = require('enzo')
const cheerio = require('cheerio')

const generateRandomNumber = require('../../../helpers/generateRandomNumber')

const componentPath =
  require.resolve('../../../../src/components/counter/index.marko')

test('should render an increment button and decrement button', (t) => {
  t.plan(5)

  const html = render(componentPath)
  const $ = cheerio.load(html)

  const buttons = $('button')
  const incrementButton = $('button.increment')
  const decrementButton = $('button.decrement')

  t.is(buttons.length, 2)
  t.is(incrementButton.length, 1)
  t.is(decrementButton.length, 1)

  t.is(incrementButton.text(), '+')
  t.is(decrementButton.text(), '-')
})

test('should render the component with the input count', (t) => {
  t.plan(1)

  const inputCount = generateRandomNumber()

  const html = render(componentPath, { count: inputCount })
  const $ = cheerio.load(html)

  const label = $('label.count')
  t.true(label.text().endsWith(inputCount))
})
