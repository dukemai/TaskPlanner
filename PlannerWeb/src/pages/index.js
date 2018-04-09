import React from 'react'
import Link from 'gatsby-link'
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { Tasks, Capacity } from '../components';
import './index.css';

const IndexPage = () => (
  <DragDropContextProvider backend={HTML5Backend}>
    <section className="page page--home">
      <Capacity />
      <Tasks />
    </section>
  </DragDropContextProvider>
)

export default IndexPage
