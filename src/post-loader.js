const path = require('path')
const reactToHast = require('./react-to-hast')

// This markdown processing pipeline originally from
// https://github.com/wookiehangover/wookiehangover.com/tree/master/src

const postTemplate = (props, tree) => (`
import { Component } from 'react'
import Post from '../../src/components/post'
import ComponentTree from '../../src/components/component-tree'
import components from '../../src/components/md-components'

export default (props) => {
  const data = ${JSON.stringify(props, null, 2)}
  const body = ${JSON.stringify(tree)}
  return (
    <Post {...data}>
      <ComponentTree {...body} components={components} />
    </Post>
  )
}
`)

const compileMarkdown = (source) => new Promise((resolve, reject) => {
  reactToHast.process(source, (err, hast) => {
    if (err) reject(err)
      else resolve(hast)
  })
})

const renderPost = (source, resourcePath) => {
  return Promise.all([
    compileMarkdown(source),
  ]).then((output) => {
    const [ postHast, stats ] = output
    const { slug } = postHast.data
    const tags = postHast.data.categories ? JSON.parse(postHast.data.categories) : []
    const title = postHast.data.title.replace(/["]+/g, '');
    const dateCreated = (postHast.data.created || postHast.data.date).split(' ')[0];
    const props = Object.assign({}, postHast.data, {
      path: `pages/posts/${slug}.js`,
      permalink: `posts/${slug}`,
      created: dateCreated,
      title: title,
      tags: tags,
    })
    return postTemplate(props, postHast.contents)
  })
}

module.exports = function(source, map) {
  const done = this.async()

  this.addDependency(path.resolve('./components/post.js'))
  this.addDependency(path.resolve('./components/md-components.js'))
  this.addDependency(path.resolve('./components/component-tree.js'))

  renderPost(source, this.resourcePath)
    .catch(done).then(post => done(null, post))
}
