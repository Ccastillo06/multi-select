import React from 'react';
import styled from 'styled-components';

export interface OptionsI {
  id: string | number;
  value: string;
}

interface PropsI {
  options: OptionsI[];
  onSelect: Function;
  isAvailable?: boolean;
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 47.5%;
  text-align: center;
`;

const OptionButton = styled('button')<{ isAvailable: boolean }>`
  background-color: ${({ isAvailable }) => (isAvailable ? '#4DAF7C' : '#D24D57')};
  color: #fff;
  font-size: 1rem;
  border: 0;
  padding: 0.25rem 0.5rem;
  margin: 0.1rem 0;
  cursor: pointer;
`;

const NoOptionsAvailable = () => (
  <p>
    No options available!{' '}
    <span role="img" aria-label="search-icon">
      🔍
    </span>
  </p>
);

const NoOptionsSelected = () => (
  <p>
    No options selected!{' '}
    <span role="img" aria-label="search-icon">
      🤓
    </span>
  </p>
);

export const SelectColumn = ({ options, onSelect, isAvailable = false }: PropsI) => {
  const EmptyMessageComponent = isAvailable ? NoOptionsAvailable : NoOptionsSelected;

  return (
    <Column>
      {!options.length && <EmptyMessageComponent />}
      {options.map(({ id, value }) => (
        <OptionButton
          key={id}
          data-test={`option-${id}`}
          aria-label={`Not selected option with name ${value}`}
          onClick={() => onSelect({ id, value })}
          isAvailable={isAvailable}
        >
          {value}
        </OptionButton>
      ))}
    </Column>
  );
};
