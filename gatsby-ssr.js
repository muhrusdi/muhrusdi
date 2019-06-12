import React from 'react'
import Layout from 'Containers/layout'

export const wrapPageElement = ({element}) => {
  return (
    <Layout>
      { element }
    </Layout>
  )
}