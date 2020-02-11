jest.mock('rdflib')
jest.mock('solid-auth-client')
import { JSDOM } from 'jsdom'
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>').window.document

import {
  elementForImageURI,
  creatorAndDate,
  creatorAndDateHorizontal,
  renderMessage
} from '../../../src/chat/message'

describe('elementForImageURI', () => {
  it('exists', () => {
    expect(elementForImageURI).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const imageUri = ''
    const options = {
      inlineImageHeightEms: 10
    }
    ;(window as any).$rdf = {
      sym: () => {}
    }
    expect(elementForImageURI(imageUri, options)).toBeInstanceOf(HTMLAnchorElement)
  })
})

describe('creatorAndDate', () => {
  it('exists', () => {
    expect(creatorAndDate).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const td1 = {
      appendChild: () => {}
    }
    const creator = {}
    const date = {}
    const message = ''
    expect(creatorAndDate(td1, creator, date, message)).toEqual(undefined)
  })
})

describe('creatorAndDateHorizontal', () => {
  it('exists', () => {
    expect(creatorAndDateHorizontal).toBeInstanceOf(Function)
  })
  it('runs', () => {
    const td1 = {
      appendChild: () => {
        return {
          style: {}
        }
      }
    }
    const creator = {}
    const date = {}
    const message = ''
    expect(creatorAndDateHorizontal(td1, creator, date, message)).toEqual(undefined)
  })
})

describe('renderMessage', () => {
  it('exists', () => {
    const messageTable = {
      appendChild: () => {}
    }
    const bindings = {
      '?creator': {
        value: {
          termType: ''
        }
      },
      '?date': {
        value: ''
      },
      '?msg': {
        doc: () => ''
      },
      '?content': {
        value: ''
      }
    }
    const fresh = {}
    const options = {}
    const userContext = {}
    expect(renderMessage(messageTable, bindings, fresh, options, userContext)).toBeInstanceOf(HTMLTableRowElement)
  })
})


