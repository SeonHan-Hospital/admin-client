import styled from "styled-components";
import theme from "../../styles/theme";

interface ICellProps {
  minWidth?: number;
  width?: number;
  wrapWidth?: number;
  isClickable?: boolean;
  left?: boolean;
  align?: string;
  isComplete?: boolean;
  isFail?: boolean;
  ismissed?: boolean;
  isNotProgress?: boolean;
  isInfo?: boolean;
}

export const Cell = styled.div.attrs({
  variant: "body1",
  as: "div",
})<ICellProps>`
  padding: 8px 10px;
  display: flex;
  justify-content: ${({ align }) => align || "flex-start"};
  align-items: center;
  width: 120px;
  word-break: break-word;
  box-sizing: border-box;
  font-size: 13px;
  min-height: 40px;
  color: ${({ isFail }) => (isFail ? "#A7A9AC" : "#6F6C6E")};

  ${({ minWidth }) =>
    minWidth &&
    `min-width: ${minWidth}${typeof minWidth === "number" ? "px" : ""};`}
  ${({ wrapWidth, width }) =>
    width ? `width: ${width}px` : !wrapWidth ? `width: 100%;` : ``} 
  ${({ isClickable }) => isClickable && `cursor: pointer;`}
  ${({ left }) => left && `justify-content: flex-start;`}
`;

export const Row = styled.div<{ header: any }>`
  ${({ header }) =>
    header
      ? `background-color: #f9f9f9;`
      : `
    &:hover {
      background-blend-mode: multiply;
      background-image: linear-gradient(to bottom, ${theme.palette.borderGray}, ${theme.palette.borderGray});
    }
  `}
  border-bottom: 1px solid #eaeaed;
  display: flex;
  align-items: center;
  min-height: 48px;
  color: #555;
`;
