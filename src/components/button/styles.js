import styled from 'styled-components';
import colors from '../../theme/colors';

export const Button = styled.button.attrs({
    type: 'button'
})`
    background: ${props => props.disabled ? `${colors.BUTTONDISABLED}` : `${colors.COLOR_BUTTON}`};
    border: 0;
    padding: 0 15px;
    border-radius: 4px;
    height: 30px;
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.span`
    text-align: left;
    font-size: 16px;
    color: #ffffff;
    opacity: 1;
`;