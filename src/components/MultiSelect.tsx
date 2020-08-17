import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';

import { SelectColumn, OptionsI } from './SelectColumn';
import { SelectHeader } from './SelectHeader';

interface PropsI {
  options: OptionsI[];
  selection: OptionsI[];
  onChange: Function;
  clearAllEnabled?: boolean;
}

const ColumnContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const MultiSelect = ({ options, selection, onChange, clearAllEnabled = true }: PropsI) => {
  const [searchFilter, setSearchFilter] = useState('');

  // Make the clear a callback so the function gets cached as it wont change
  const clearSelection = useCallback(() => onChange([]), [onChange]);

  function handleSelectOption(selected: OptionsI) {
    onChange([...selection, selected]);
  }

  function handleDeselectOption(selected: OptionsI) {
    const newSelections = selection.filter(({ id }) => id !== selected.id);
    onChange(newSelections);
  }

  // Memoize the filtered result and change it only when selection changes.
  // This will prevent the filter computing this expensive calculation again.
  const availableOptions = useMemo(
    () => options.filter((option) => !selection.find((selected) => selected.id === option.id)),
    [options, selection]
  );

  // Memoize this filter too so we only recalculate it when options or the filter change.
  const filteredOptions = useMemo(
    () =>
      availableOptions.filter((option) =>
        option.value.toLowerCase().includes(searchFilter.trim().toLowerCase())
      ),
    [availableOptions, searchFilter]
  );

  return (
    <div>
      <SelectHeader
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        clearSelection={clearSelection}
        clearAllEnabled={clearAllEnabled}
      />

      <ColumnContainer>
        <SelectColumn isAvailable options={filteredOptions} onSelect={handleSelectOption} />
        <SelectColumn options={selection} onSelect={handleDeselectOption} />
      </ColumnContainer>
    </div>
  );
};
