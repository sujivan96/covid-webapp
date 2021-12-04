import React, { useState } from 'react'

import { FormControl, InputGroup } from 'react-bootstrap'


function SearchBar(props) {

  const { onSearch } = props;
  const [searchText, setSearchText] = useState('')

  const handleInput = (e) => {
    const text = e.target.value
    setSearchText(text)
  }

  const handleEnterKeyPressed = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchText)
    }
  }
  return (

    <div >

      <InputGroup className="mb-5" size="lg">
        <FormControl
          placeholder="Search Your Country"
          aria-label="Search Your Country"
          aria-describedby="basic-addon2"
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          value={searchText}
        />
        <InputGroup.Text id="basic-addon2">🔍</InputGroup.Text>
      </InputGroup>
    </div>
  )
}
export default SearchBar;