import React, {Dispatch, FC, SetStateAction} from 'react';
import ModalStyled, {Container} from "./style";

interface IConfirm {
    onConfirm: any;
    title: string;
    setShow: Dispatch<SetStateAction<boolean>>;
}

const Confirm: FC<IConfirm> = ({title, onConfirm, setShow}) => {
    return (
        <Container>
            <ModalStyled.Title>
                {title}
            </ModalStyled.Title>
            <ModalStyled.Footer>
                <ModalStyled.Btn
                    variant={"green"}
                    onClick={() => onConfirm()}
                >
                    Confirm
                </ModalStyled.Btn>
                <ModalStyled.Btn
                    variant={"blue"}
                    onClick={() => setShow(false)}
                >
                    Cancel
                </ModalStyled.Btn>
            </ModalStyled.Footer>
        </Container>
    );
};

export default Confirm;