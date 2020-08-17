import React, { useState } from 'react';
import styled from 'styled-components';

import { MultiSelect } from './components/MultiSelect';
import { MOCK_OPTIONS } from './mocks/mockOptions';

// Apply styles to App to show the component working correctly fit the screen as the 
// component MultiSelect is fully adaptable to the container wrapping it.
const AppContainer = styled.div`
  padding: 1rem;
  max-width: 900px;
  margin: 0 auto;
`;

const SeparatorLine = styled.hr`
  margin: 2rem 0;
`

function App() {
  const [selection, setSelection] = useState([]);

  return (
    <AppContainer>
      <h1>Multi Select example</h1>
      <h3>This component will handle:</h3>
      <ul>
        <li>Filtering available options</li>
        <li>Selecting options from the left column, moving it to the right column</li>
        <li>Removing one selected options from the right column</li>
        <li>Clear all selected options at once</li>
      </ul>

      <SeparatorLine />

      <MultiSelect options={MOCK_OPTIONS} selection={selection} onChange={setSelection} />
    </AppContainer>
  );
}

export default App;
