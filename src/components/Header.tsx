import styled from 'styled-components'

interface Strike {
    left: number;
    width: number;
    color?: string;
}

const Wrapper = styled.div`
    background-color: #2D2D2D;
    padding: 20px;
    text-align: center;
    height: 80px;

    h1 {
        display: inline-block;
    }
`;

const Strike = styled.div<Strike>`
    position: relative;

    ::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: ${props => props.left ? props.left + "%" : "0%"};
        width: ${props => props.width ? props.width + "%" : "0%"};
        border-bottom: 2px solid ${props => props.color ? props.color : '#f2e737'};
    }
`

const Header = () => {
    return (
        <Wrapper>
            <h1>search pal
                <Strike left={0} width={40}></Strike>
                <Strike left={43} width={25}></Strike>
                <Strike left={71} width={15}></Strike>
                <Strike left={90} width={10}></Strike>
            </h1>
        </Wrapper>
    )
}

export default Header;