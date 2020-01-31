import React from "react";
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: red;
`;

const App: React.FC = () => {

  return (
    <StyledH1>
      Hello world!
    </StyledH1>
  );
};

export default App;
