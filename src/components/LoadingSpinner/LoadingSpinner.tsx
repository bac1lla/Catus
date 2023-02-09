import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerOverlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Spinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 0.8s linear infinite;
`;

interface Props {
    loading: boolean;
}

const LoadingSpinner: React.FC<Props> = ({ loading }) => {
    if (!loading) return null;

    return (
        <SpinnerOverlay>
            <Spinner />
        </SpinnerOverlay>
    );
};

export default LoadingSpinner;