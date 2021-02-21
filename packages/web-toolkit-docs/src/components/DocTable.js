import React from 'react'
import jss from 'react-jss'
import { sortBy } from 'rambda'
import prettier from 'prettier'
import parserBabel from 'prettier/esm/parser-babel'

const DEFAULT_PROP_DESCRIPTIONS = {
  'value': 'The value of the component',
  'defaultValue': 'The initial value of the component',
  'className': 'The class of the component',
  'size':      'The size of the component',
}

const border = '#ccc'
const styles = {
  root: {
    border: `1px solid ${border}`,
    borderCollapse: 'collapse',
    '& td, & th': {
      border: `1px solid ${border}`,
    },
    '& th': {
      padding: '1rem 10px',
      textAlign: 'left',
      opacity: 0.5,
      fontSize: 11,
      letterSpacing: 0.2,
      textTransform: 'uppercase',
    },
    '& td': {
      borderTop: 'none',
      borderBottom: 'none',
      padding: '0.5rem 10px',
      verticalAlign: 'top',
      fontSize: 14,
    },
    '& td:nth-child(1)': { // required
      fontWeight: 'bold',
      fontFamily: 'monospace',
    },
    '& td:nth-child(3)': { // required
      textAlign: 'center',
    },
    '& td:nth-child(4)': { // description
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
  const keys = sortBy(
    k => !propTypes[k].required,
    Object.keys(propTypes)
  )

  return (
    <table className={classes.root}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Required</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        {keys.map(key =>
          <tr key={key}>
            <td>{key}</td>
            <td>{formatType(propTypes[key].value)}</td>
            <td>{propTypes[key].required ? 'Yes' : null}</td>
            <td>{propTypes[key].description || DEFAULT_PROP_DESCRIPTIONS[key]}</td>
            <td>{formatDefault(defaultProps[key]?.value)}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default jss(styles)(DocTable)

function formatType(type) {
  const doc =
    type
      .replace(/prop\./g, '')
      .replace(/\.isRequired$/, '')
      .replace(/\bshape\b/g, '')

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

