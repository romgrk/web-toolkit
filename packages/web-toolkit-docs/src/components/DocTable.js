import React from 'react'
import jss from 'react-jss'
import prettier from 'prettier'
import parserBabel from 'prettier/esm/parser-babel'

const border = '#ccc'

const styles = {
  root: {
    border: `1px solid ${border}`,
    borderCollapse: 'collapse',
    '& td, & th': {
      padding: '5px 10px',
      border: `1px solid ${border}`,
    },
    '& td:nth-child(3), & td:nth-child(3)': {
      minWidth: 200,
    },
    '& pre': {
      margin: 0,
    }
  }
}

function DocTable({ classes, data }) {
  const {
    propTypes = {},
    defaultProps = {},
  } = data
  const keys = Object.keys(propTypes)

  return (
    <table className={classes.root}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        {keys.map(key =>
          <tr key={key}>
            <td><code>{key}</code></td>
            <td>{formatType(propTypes[key].value)}</td>
            <td>{propTypes[key].description}</td>
            <td>{formatDefault(defaultProps[key]?.value)}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default jss(styles)(DocTable)

function formatType(type) {
  const doc = type.replace(/prop\./g, '')
  const prettyDoc = prettier.format(doc, {
    parser: 'babel',
    plugins: [parserBabel],
    semi: false,
    printWidth: 25,
  }).trim()
  if (prettyDoc.includes('\n'))
    return <pre>{prettyDoc}</pre>
  return <code>{prettyDoc}</code>
}

function formatDefault(value) {
  if (!value)
    return null
  return <code>{value}</code>
}

