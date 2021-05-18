import React from 'react'

import { ProjectsPageComponent } from 'app/pages'
import { Layout, PageTitle } from 'app/components'

const ProjectsPage = () => {
   return (
      <Layout title="Projects">
         <PageTitle>
            <h2>Projects</h2>
         </PageTitle>
         <ProjectsPageComponent />
      </Layout>
   )
}

export default ProjectsPage
