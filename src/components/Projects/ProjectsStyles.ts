import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 1350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 10px 0 100px 0;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 480px) {
    margin-top: 12px;
    font-size: 2rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 20px;
`;