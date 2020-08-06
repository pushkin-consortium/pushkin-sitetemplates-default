import React from 'react'
import { Button } from 'react-bootstrap';
import SearchResult from './SearchResult'

// Note: Glyphicon no longer valid; removed from the left of "Clear Search" and no longer importing from react-bootstrap

class SearchResultList extends React.Component {
  render() {
    const { term, results, clearSearch } = this.props;
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <span>
            Search Term: <strong>{term}</strong>
          </span>
          <Button onClick={clearSearch}>
            Clear Search
          </Button>
        </div>
        {results.map(result => <SearchResult result={result} term={term} />)}
      </div>
    );
  }
}
export default SearchResultList;