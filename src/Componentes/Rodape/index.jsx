import { styled } from "styled-components"
import facebook from "/imagens/sociais/facebook.svg"
import twitter from "/imagens/sociais/twitter.svg"
import instagram from "/imagens/sociais/instagram.svg"

const RodapeStyled = styled.footer`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    background-color: #04244F;
    width: 100%;
    margin-top: 100px;
    padding: 22px;
    ul {
        margin: 0;
        padding: 0;
        li {
            display: inline-block;
            list-style: none;
            margin-right: 34px;
        }
    }
    p {
        color: #FFF;
        font-size: 16px;
        margin: 0;
    }
`

const Rodape = () => {
    return (
        <RodapeStyled> 
                <ul>
                    <li><a href="#"><img src={facebook} alt="Facebook" /></a></li>
                    <li><a href="#"><img src={twitter} alt="Twitter" /></a></li>
                    <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
                </ul>
                <p>Desenvolvido por Alura.</p>  
        </RodapeStyled>
    )
}

export default Rodape