import React from 'react';
import Layout from '../../layout/';
import './style.css'

import Logo from '../../components/Logo/'
import Nav from '../../components/NavigationMenu/'
import Recipe from '../../components/RecipeList/'

const Community = () => {
  return (
    <Layout>
      <Logo />
      <Nav />
      <Recipe />
    </Layout>
  );
};

export default Community;
