import React from 'react'
import Link from 'gatsby-link'

import { Tasks, Capacity } from '../components';
import './index.css';

const IndexPage = () => (
  <section className="page page--home">
    <Tasks />
    <Capacity />
  </section>
)

export default IndexPage
