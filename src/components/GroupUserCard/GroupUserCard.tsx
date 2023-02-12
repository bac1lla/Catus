import React, {FC, useContext, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import TrashIcon from "../../assets/img/trashIcon.png";
import Card from "./style";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

interface IGroupUserCardProps {
    user: IUser,
    onClick?: (user: IUser) => void,
    onDelete?: (user: IUser) => void,
    disable?: boolean,
    chosenStudents?: Set<IUser>
    showLogin?: boolean
}

const GroupUserCard: FC<IGroupUserCardProps> = ({
                                                    user,
                                                    onClick,
                                                    onDelete,
                                                    disable = false,
                                                    chosenStudents,
                                                    showLogin = false
                                                }) => {

    const {groups, projects} = useContext(Context)
    const [target, setTarget] = useState<boolean>(false)

    useEffect(() => {
        if (chosenStudents?.size === 0) {
            setTarget(false)
        }
    }, [groups.group()])

    useEffect(() => {
        setTarget(false)
    }, [projects.allUsers()])

    const handleClick = () => {
        onClick && onClick(user)
        setTarget(!target)
    }

    return (
        <Card canDelete={onDelete !== undefined} choose={disable ? false : target} onClick={handleClick}>
            <Card.Image>{user.name[0]}</Card.Image>
            <Card.Info>
                <Card.Name>{user.name}</Card.Name>
                {
                    showLogin ?
                        <Card.Group>{user.login}</Card.Group>
                        :
                        <Card.Group>{user.group?.name}</Card.Group>
                }
            </Card.Info>
            <Card.Trash src={TrashIcon} onClick={() => onDelete && onDelete(user)} show={onDelete !== undefined}/>
        </Card>
    );
};

export default observer(GroupUserCard);

