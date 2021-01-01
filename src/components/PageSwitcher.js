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
      label: prop.node,
      content: prop.node.isRequired,
    })),
    mainPage: prop.number,
    activePage: prop.number,
    transition: prop.oneOf(['horizontal', 'vertical', 'opacity']),
    expand: prop.bool,
    useMainPageDimensions: prop.oneOf([prop.bool, 'width', 'height']),
  }

  static defaultProps = {
    transition: 'horizontal',
    expand: false,
    useMainPageDimensions: false,
  }

  constructor(props) {
    super(props)
    this.activePage = React.createRef()
    this.state = {
      activePage: props.activePage,
      isSwitching: false,
      width: undefined,
      height: undefined,
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

  onRef = ref => {
    this.activePage.current = ref
    if (!ref)
      return
    const { activePage, useMainPageDimensions, mainPage } = this.props
    const isMainPage = activePage === mainPage

    if (useMainPageDimensions === false && !isMainPage)
      return

    const { width, height } = this.activePage.current.getBoundingClientRect()
    const state = {}
    if (isMainPage || useMainPageDimensions === true || useMainPageDimensions !== 'width')
      state.width = width
    if (isMainPage || useMainPageDimensions === true || useMainPageDimensions !== 'height')
      state.height = height
    this.setState(state)
  }

  render() {
    const {
      className,
      pages,
      activePage: activePageProp,
      mainPage,
      transition,
      expand,
      style,
      useMainPageDimensions,
      ...rest
    } = this.props
    const {
      activePage,
      isSwitching,
      width,
      height,
    } = this.state

    const renderedPages = this.getPagesToRender()

    const activePageValue = 
      isSwitching ? activePageProp : activePage

    if (activePage !== activePageProp && !isSwitching) {
      this.mustSetIsSwitching = true
    }

    const containerStyle = !expand ? style : { width, height, ...style }

    return (
      <div
        className={cx(
          'PageSwitcher',
          className,
          transition,
          !useMainPageDimensions ? undefined :
          useMainPageDimensions === true ? 'use-both' :
            `use-${useMainPageDimensions}`,
          { expand }
        )}
        style={containerStyle}
        {...rest}
      >
        {renderedPages.map(n =>
          <div
            key={pages[n].key || n}
            className={cx('PageSwitcher__page', {
              active: n === activePageValue,
              main: n === mainPage,
            })}
            onTransitionEnd={this.onTransitionEnd}
            ref={expand && n === activePageValue ? this.onRef : undefined}
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
