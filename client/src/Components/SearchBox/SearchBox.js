import React from "react"
import { Icon, Header, Segment } from "semantic-ui-react"
import "../SearchBox/SearBox.css"

export const SearchBox = ({ placeholder, handleSearch }) => {
  return (
    <Segment placeholder padded>
      <Header icon>
        <Icon name="search" />
        Looking for Dev Jobs
      </Header>
      <Segment.Inline>
        <input
          className="search"
          type="search"
          placeholder={placeholder}
          onChange={handleSearch}
        />
      </Segment.Inline>
    </Segment>
  )
}
