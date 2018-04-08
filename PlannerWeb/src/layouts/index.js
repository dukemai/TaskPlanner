import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div className="layout">
    <Helmet
      title="Task Planner"
      meta={[
        { name: 'description', content: 'Task Planner' },
        { name: 'keywords', content: 'Task Planner, Planner' },
      ]}
    />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
