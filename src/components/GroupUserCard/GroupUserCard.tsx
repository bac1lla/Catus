import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import TrashIcon from "../../assets/img/trashIcon.png";
import Card from "./style";

interface IGroupUserCardProps {
    user: IUser,
    onClick?: (user: IUser) => void,
    onDelete?: (user: IUser) => void,
    // showDelete?: boolean,
    // choose?: boolean
}


const GroupUserCard: FC<IGroupUserCardProps> = ({user, onClick, onDelete}) => {

    const [target, setTarget] = useState<boolean>(false)

    const handleClick = () => {
        if (onDelete === undefined) {
            onClick && onClick(user)
            setTarget(!target)
        }
    }

    return (
        <Card canDelete={onDelete !== undefined} choose={target} onClick={() => handleClick()}>
            <Card.Image>{user.name[0]}</Card.Image>
            <Card.Info>
                <Card.Name>{user.name}</Card.Name>
                <Card.Name>{user.group.name}</Card.Name>
            </Card.Info>
            <Card.Trash src={TrashIcon} onClick={() => onDelete && onDelete(user)} show={onDelete !== undefined}/>
        </Card>
    );
};

export default GroupUserCard;

