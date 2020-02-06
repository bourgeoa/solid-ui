jest.mock('rdflib')
import * as RdfLib from 'rdflib'
jest.mock('solid-auth-client')
import * as SolidAuthClient from 'solid-auth-client'

import { findBookmarkDocument, toggleBookmark, renderBookmarksButton } from '../../../src/chat/bookmarks'

describe('findBookmarkDocument', () => {
  it('exists', () => {
    expect(findBookmarkDocument).toBeInstanceOf(Function)
  })

  // findBookmarkDocument › runs
  //   TypeError: thisIndex.map(...).flat is not a function
  it.skip('runs', async () => {
    const context = {
      index: {}
    }
    window.alert = () => {}

    const result = await findBookmarkDocument(context);
    expect(result).toEqual({
      containers: [],
      index: {
        public: [],
      },
      instances: [],
    })
  })
})

describe('toggleBookmark', () => {
  it('exists', () => {
    expect(toggleBookmark).toBeInstanceOf(Function)
  })
  it.skip('runs', async () => {
    const userContext = {
      me: new RdfLib.NamedNode('http://example.com'),
      bookmarkDocument: new RdfLib.NamedNode('http://example.com')
    }
    const target = {}
    const bookmarkButton = {}
    try {
      const result = await toggleBookmark(userContext, target, bookmarkButton)
    } catch(e) {
      expect(e.message).toEqual('Cannot read property \'origin\' of undefined')
    } 
  })
})

describe('renderBookmarksButton', () => {
  it('exists', () => {
    expect(renderBookmarksButton).toBeInstanceOf(Function)
  })
  it.skip('runs', async () => {
    const userContext = {
      me: new RdfLib.NamedNode('http://example.com'),
      bookmarkDocument: new RdfLib.NamedNode('http://example.com')
    }
    const target = {}
    const result = await renderBookmarksButton(userContext, target)
    expect(typeof result).toEqual(Object) 
  })
})