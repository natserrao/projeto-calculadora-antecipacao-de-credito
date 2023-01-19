import { SectionStyled} from "./style";
import { Info } from "../Info";
import { Form } from "../Form";


export const Calculator = () => {

    return(
        <SectionStyled className="container">
            <Form/>
            <Info/>
           
        </SectionStyled>
    );
}