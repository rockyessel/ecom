import React, { useState } from 'react';
import { client } from '../library/client';
import { ProductSearch } from '../components';
import Head from 'next/head';

const Search = ({ result }) => {
  const [selectedValue, setSelectedValue] = useState('name');

  return (
    <div>
      <Head>
        <title>Search | JestinaCommerce</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <ProductSearch
          data={result}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </div>
    </div>
  );
};
console.log(process.version, process.arch, process.platform);
export const getStaticProps = async () => {
  const query = `*[_type == 'product']{
    name,
  slug,
  image,
  new_price,
  old_price,
}`;

  const result = await client.fetch(query);

  return {
    props: {
      result,
    },
  };
};

export default Search;