import { useState } from "react";
import { useQuery } from "@apollo/client";
import ProductCard from "@components/ProductCard";
import ProductCardLoader from '@components/ProductCard/Loader'
import SearchBar from '@components/Search';
import NoResultFound from './components/NoResults';

import { ContentCards } from "./queries/searchQuery.graphql";
import { Container, Main } from './styles';

const SearchModule = () => {
  const limit = 20;
  const offset = 0
  const [keywords, updateKeywords] = useState('')

  const { loading, error, data } = useQuery(ContentCards, {
    variables:{filter: {
      limit,
      offset,
      types: ["PODCAST"],
      keywords
    },
  }
  });
  
  const renderCards = () => {
    return data.contentCards.edges.map((d,i) => {
      return ( d.name ? <ProductCard showProgress categories={d.categories} experts={d.experts} key={i} name={d.name} imageUrl={d.image.uri} /> : "");
    });
  };
  const renderLoadingCards = () => {
    return [1,2,3].map((d)=>{
      return (<ProductCardLoader key={d}/>)
    })
  }
  const getSearchValue = (val) =>{
    updateKeywords(val);    
  }
  return <Container>
      <Main>
        <SearchBar getSearchValue={getSearchValue} />
        { loading ? renderLoadingCards() : renderCards() }
        { !loading && !data.contentCards.edges.length ? <NoResultFound /> : ''}
      </Main>
    </Container>;
};

export default SearchModule;
