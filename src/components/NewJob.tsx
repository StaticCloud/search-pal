import styled from 'styled-components'

interface Strike {
    spacing?: number;
    direction: string;
    width?: number;
    height?: number;
}

const Strike = styled.div<Strike>`
    position: absolute;

    content: '';
    ${props => props.width ? 
        `left: ${props.spacing ? props.spacing + "%" : "0%"};` : 
        `top: ${props.spacing ? props.spacing + "%" : "0%"};`
    }
    
    height: ${props => props.height ? props.height + "%" : "100%"};
    width: ${props => props.width ? props.width + "%" : "100%"};
    border-${props => props.direction}: 3px solid rgb(191, 191, 191);
`

const Plus = styled.div<{ direction: 'horizontal' | 'vertical'}>`
    position: absolute;
    background-color: rgb(191, 191, 191);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    ${props => props.direction === 'vertical' ?
        `width: 10px;
        height: 40px;` :
        `width: 40px;
        height: 10px;`
    }
`;

const JobWrapper = styled.div`
    width: 310px;
    height: 310px;
    margin: 20px;

    position: relative;
`;

const NewJob = () => {
    return (
        <JobWrapper>
            <Plus direction="horizontal"></Plus>
            <Plus direction="vertical"></Plus>

            <Strike direction={'top'}></Strike>
            <Strike direction={'left'}></Strike>

            <Strike width={30} direction={'bottom'}></Strike>
            <Strike width={30} spacing={35} direction={'bottom'}></Strike>
            <Strike width={7} spacing={70} direction={'bottom'}></Strike>

            <Strike height={60} direction={'right'}></Strike>
            <Strike height={15} spacing={65} direction={'right'}></Strike>
            <Strike height={5} spacing={85} direction={'right'}></Strike>
        </JobWrapper>
    );
}

export default NewJob;