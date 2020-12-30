/*
 * PageSwitcher.js
 */


import React from 'react'
import cx from 'clsx'
import prop from 'prop-types'

class PageSwitcher extends React.Component {
  static propTypes = {
    className: prop.string,
    pages: prop.arrayOf(prop.shape({
      key: prop.string.isRequired,
      label: prop.node.isRequired,
      content: prop.node.isRequired,
    })),
    activePage: prop.number,
    transition: prop.oneOf(['horizontal', 'vertical', 'opacity']),
  }

  static defaultProps = {
    transition: 'horizontal',
  }

  constructor(props) {
    super(props)
    this.state = {
      activePage: props.activePage,
      isSwitching: false,
    }
  }

  getPagesToRender() {
    const { activePage: activePageProp } = this.props
    const { activePage } = this.state

    const pages = Array.from(new Set([activePage, activePageProp]
      .filter(n => n !== undefined)))
    pages.sort(compare)

    return pages
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.activePage !== state.activePage && !state.isSwitching)
  //     return { isSwitching: true }
  //   return null
  // }

  componentDidUpdate() {
    if (this.mustSetIsSwitching) {
      this.mustSetIsSwitching = false
      requestAnimationFrame(() => {
        this.setState({ isSwitching: true })
      })
    }
  }

  onTransitionEnd = () => {
    this.setState({
      isSwitching: false,
      activePage: this.props.activePage,
    })
  }

  render() {
    const {
      className,
      pages,
      activePage: activePageProp,
      transition,
      ...rest
    } = this.props
    const {
      activePage,
      isSwitching,
    } = this.state

    const renderedPages = this.getPagesToRender()

    const activePageValue = 
      isSwitching ? activePageProp : activePage

    if (activePage !== activePageProp && !isSwitching) {
      this.mustSetIsSwitching = true
    }
    console.log('render', this.state, { activePageProp, must: this.mustSetIsSwitching })

    return (
      <div
        className={cx('PageSwitcher', className, transition)}
        {...rest}
      >
        {renderedPages.map(n =>
          <div
            key={pages[n].key || n}
            className={cx('PageSwitcher__page', {
              active: n === activePageValue,
            })}
            onTransitionEnd={this.onTransitionEnd}
          >
            {pages[n]?.content}
          </div>
        )}
      </div>
    )
  }
}

export default PageSwitcher


// Helpers

function compare(a, b) {
  return a - b
}
