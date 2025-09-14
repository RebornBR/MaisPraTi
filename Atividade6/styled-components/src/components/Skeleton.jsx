import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const SkeletonBox = styled.div`
  height: 200px;
  border-radius: 8px;
  background: linear-gradient(90deg, #ddd 25%, #eee 50%, #ddd 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

const Skeleton = () => <SkeletonBox aria-hidden="true" />;

export default Skeleton;