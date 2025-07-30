import React from 'react';
import Cards from './cards/Cards'; // ✅ Capitalized and correct path
import Banner from './Banner/Banner';

const Blog = () => {
  return (
    <div>
      <Banner/>
      <Cards /> {/* ✅ Capitalized component usage */}
    </div>
  );
};

export default Blog;
