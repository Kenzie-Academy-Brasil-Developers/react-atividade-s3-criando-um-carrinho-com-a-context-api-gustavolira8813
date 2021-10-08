import styled from "styled-components";

export const Container = styled.div`
  ul {
    margin: 9px;
    padding: 0;
    min-height: 40vh;
    max-width: 1000px;
    background-color: azure;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
export const List = styled.li`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 5px;
  border: 1px solid #00188085;
  background: ${(props) =>
    props.type === "catalogue" ? "#13901399" : "#a52a2aba"};
  img {
    width: 150px;
    height: 150px;
  }
`;
