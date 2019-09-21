import styled from "@emotion/styled";

const Ellipsis = styled.div`
  display: block;
  display: -webkit-box !important;
  height: ${({ lineHeight, fontSize, clamp }) => (fontSize + 1) * lineHeight * clamp}px;
  margin: ${({ marginTop }) => marginTop || 0}px 0;
  font-size: ${({ fontSize }) => fontSize}px;
  -webkit-line-clamp: ${({ clamp }) => clamp};
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: ${({ lineHeight }) => lineHeight}rem;
  ${({ clamp }) => clamp === 1 && "word-break: break-all;text-overflow: ellipsis;"}
`;
export default Ellipsis;
