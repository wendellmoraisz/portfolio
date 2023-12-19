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
  max-width: 1200px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
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

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
`;

export const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  border-radius: 16px;
  padding: 18px 36px;


  @media screen and (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media screen and (max-width: 500px) {
    max-width: 300px;
    padding: 10px 36px;
  }
`;

export const SkillTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
  text-align: center;
`;

export const SkillsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text_primary+80};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_primary+80};
  padding: 12px 16px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
    padding: 6px 8px;
  }
`;

export const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;