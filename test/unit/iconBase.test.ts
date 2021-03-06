import { silenceDebugMessages } from '../helpers/setup'
import { icons } from '../../src/iconBase'

const { iconBase, originalIconBase } = icons

silenceDebugMessages()
jest.mock('solid-auth-client')

describe('iconBase', () => {
  it('exists', () => {
    expect(iconBase).toEqual('https://solid.github.io/solid-ui/src/icons/')
  })
})

describe('originalIconBase', () => {
  it('exists', () => {
    expect(originalIconBase).toEqual('https://solid.github.io/solid-ui/src/originalIcons/')
  })
})
