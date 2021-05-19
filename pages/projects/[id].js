import React from 'react';

import { Layout, PageTitle } from 'app/components';
import { DetailsComponent } from 'app/pages';
import { projects } from 'projects';

const ProjectDetailsPage = ({ project }) => {
   return (
      <Layout>
         <PageTitle>
            <h2>{project.title}</h2>
            <span>project details</span>
         </PageTitle>
         <DetailsComponent project={project} />
      </Layout>
   );
};

export default ProjectDetailsPage;

export async function getStaticProps(ctx) {
   const { id } = ctx.params;

   const currentProject = projects.find((el) => el.id === id);

   return {
      props: {
         project: currentProject,
      },
   };
}

export async function getStaticPaths() {
   const paths = projects.map((el) => {
      const obj = {
         params: {
            id: el.id,
         },
      };
      return obj;
   });

   return {
      fallback: false,
      paths,
   };
}
