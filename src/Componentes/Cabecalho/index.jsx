import { styled } from "styled-components"
import CampoTexto from "../../CampoTexto"

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    } 
`

const Cabecalho = ({ filtro, setFiltro }) => {
    return (
        <HeaderStyled>
            <img src="/imagens/logo.png" alt=""/>
            <CampoTexto setFiltro={setFiltro}/>
        </HeaderStyled>
    )
}

export default Cabecalho