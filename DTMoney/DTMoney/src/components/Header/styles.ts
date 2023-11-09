import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  border: none;
  font-weight: bold;

  border-radius: 6px;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
