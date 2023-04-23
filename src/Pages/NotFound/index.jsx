import { DivFull, H1Not } from './style'

export const NotFound = () => {
    return(
        <DivFull>
            <H1Not>404 NOT FOUND</H1Not>
            <p>Por favor verifique o endereço acessado!</p>
            <img className='img_astroneer' src="https://static.wixstatic.com/media/87a683_ce547587bf694e579b6ef181c4a8c7ce~mv2.gif" alt=""></img>
        </DivFull>
    )
}