import * as React from 'react';
import Categories from './Categories';
import Blog from './Blog';

export default function PostsList ({ setActiveLink }) {
  const [click, setClick] = React.useState('all');

  return (
    <>
      <Categories click={click} setClick={setClick} setActiveLink={setActiveLink}/>
      <Blog name={click} setActiveLink={setActiveLink}/>
    </>
  )
}
