import React from 'react';
import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: rgba(0,0,0, 0.5);
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
`;

const Loading = () => (<LoadingContainer>...Loading</LoadingContainer>);

export default Loading;
