function SearchBox(props) {
  return (
    <div>
      <input
        onChange={props.searchChange}
        type='text'
        className='searchBox'
        placeholder='Search Robots..'
      />
    </div>
  );
}

export default SearchBox;
