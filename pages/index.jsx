import SearchModule from '@modules/Search';

const Search = () => {
  
  return (
    <SearchModule />
  )
}

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: gql`
//       query Countries {
//         countries {
//           code
//           name
//           emoji
//         }
//       }
//     `,
//   });
//   console.log(data);
//   return {
//     props: {
//       countries: data.countries.slice(0, 4),
//     },
//  };
// }


export default Search;