import React from 'react';
import styled from 'styled-components';

interface PropsI {
  searchFilter: string;
  setSearchFilter: Function;
  clearSelection: () => {};
  clearAllEnabled: boolean;
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const InputContainer = styled.div`
  position: relative;
  flex-basis: 60%;
  box-sizing: border-box;

  @media screen and (min-width: 400px) {
    flex-basis: 70%;
  }
`;

const SearchInput = styled.input`
  padding: 0.25rem;
  box-sizing: border-box;
  font-size: 1rem;
  width: 100%;
`;

const ClearFilterButton = styled.button`
  padding: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  background: transparent;
  border: 0;
  position: absolute;
  right: 0.5rem;
  top: 0;
  bottom: 0;
`;

const ClearButton = styled.button`
  flex-basis: 30%;
  padding: 0.25rem;
  font-size: 1rem;
  cursor: pointer;

  @media screen and (min-width: 400px) {
    flex-basis: 20%;
  }
`;

export const SelectHeader = ({
  searchFilter,
  setSearchFilter,
  clearSelection,
  clearAllEnabled,
}: PropsI) => {
  return (
    <HeaderContainer>
      <InputContainer>
        <SearchInput
          data-test="multi-select-search-filter"
          aria-label="Search filter"
          type="text"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />

        {!!searchFilter && (
          <ClearFilterButton
            data-test="multi-select-empty-filter"
            aria-label="Empty search filter"
            onClick={() => setSearchFilter('')}
          >
            X
          </ClearFilterButton>
        )}
      </InputContainer>

      {clearAllEnabled && (
        <ClearButton
          data-test="clear-selection"
          aria-label="Clear selection"
          onClick={clearSelection}
        >
          Clear all!
        </ClearButton>
      )}
    </HeaderContainer>
  );
};
