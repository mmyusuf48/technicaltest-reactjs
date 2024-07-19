import React from 'react'
import ListMovieFeature from '../../feature/list-card'
import DefaultTamplateUi from '../../ui/default-template/index'

const DashboardApp = () => {
  return (
    <div>
        <DefaultTamplateUi>
            <ListMovieFeature/>
        </DefaultTamplateUi>
    </div>
  )
}

export default DashboardApp
