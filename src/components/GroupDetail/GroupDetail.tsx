import React, {FC, useContext, useState} from 'react';
import {IGroup} from "../../models/response/GroupsResponse";
import GroupUserCard from "../GroupUserCard/GroupUserCard";
import {IUser} from "../../models/IUser";
import Modal from "../Modal/Modal";
import Confirm from "../Modal/Confirm";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Window from "./style";

interface IGroupDetailProps {
    group: IGroup
}

const GroupDetail: FC<IGroupDetailProps> = ({group}) => {
    const [showConfirm, setShowConfirm] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<IUser>({} as IUser)
    const {groups} = useContext(Context)

    const openConfirmation = (user: IUser) => {
        setCurrentUser(user)
        setShowConfirm(true)
    }

    const deleteUser = async () => {
        await groups.deleteUserFromGroup(group.id, currentUser.id)
        setShowConfirm(false)
        console.log()
    }

    return (
        <Window>
            <Window.Header>
                <Window.Title>{group.name}</Window.Title>
                <Window.Count>Total: {groups.group().users.length}</Window.Count>
            </Window.Header>
            <Window.List>
                {groups.group().users.map(user => <GroupUserCard key={user.id} user={user}
                                                                 onDelete={openConfirmation}/>)}
            </Window.List>
            <Modal setShow={setShowConfirm} show={showConfirm}>
                <Confirm onConfirm={deleteUser}
                         title={`Are you sure you want to delete ${currentUser.name} from ${group.name}`}
                         setShow={setShowConfirm}/>
            </Modal>
        </Window>
    );
};

export default observer(GroupDetail);

