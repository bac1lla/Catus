import React, {FC, useContext, useEffect, useState} from 'react';
import {IGroup} from "../../models/response/GroupsResponse";
import GroupUserCard from "../GroupUserCard/GroupUserCard";
import {IUser} from "../../models/IUser";
import Modal from "../Modal/Modal";
import Confirm from "../Modal/Confirm";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Window from "./style";
import AddStudents from "../AddStudents/AddStudents";
import {LightText} from '../../styles/fonts';

interface IGroupDetailProps {
    group: IGroup
}

const GroupDetail: FC<IGroupDetailProps> = ({group}) => {
    const [showConfirm, setShowConfirm] = useState<boolean>(false)
    const [showAddUsers, setShowAddUsers] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<IUser>({} as IUser)
    const {user, groups} = useContext(Context)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (group.id) {
            groups.fetchGroup(group.id)
        }
    }, [group, loading])

    const openConfirmation = (user: IUser) => {
        setCurrentUser(user)
        setShowConfirm(true)
    }

    const deleteUser = () => {
        user.refreshUser(currentUser.id, {group: null})
        setShowConfirm(false)
        groups.fetchGroup(group.id)
        setLoading(prev => !prev)
        setShowAddUsers(false)
    }

    const addUsers = async (users: Set<IUser>) => {
        users.forEach((userSet) => {
            user.refreshUser(userSet.id, {
                groupId: group.id
            })
        })
        if (group.id) {
            groups.fetchGroup(group.id)
        }
        setShowAddUsers(false)
        setLoading(prev => !prev)
    }
    return (
        <Window>
            <Window.Header>
                <Window.Title>{group.name}</Window.Title>
                <Window.Btn onClick={() => setShowAddUsers(true)}><LightText>Add users</LightText></Window.Btn>
                <Window.Count>Total: {groups.group().users.length}</Window.Count>
            </Window.Header>
            <Window.List>
                {groups.group().users.map(user => <GroupUserCard key={user.id} user={user}
                                                                 disable={true}
                                                                 onDelete={openConfirmation}
                                                                 showLogin={true}/>
                )}
            </Window.List>
            <Modal setShow={setShowConfirm} show={showConfirm}>
                <Confirm onConfirm={deleteUser}
                         title={`Are you sure you want to delete ${currentUser.name} from ${group.name}`}
                         setShow={setShowConfirm}/>
            </Modal>
            <Modal setShow={setShowAddUsers} show={showAddUsers}>
                <AddStudents setShow={setShowAddUsers} onConfirm={addUsers} showLogin={true}/>
            </Modal>
        </Window>
    );
};

export default observer(GroupDetail);

