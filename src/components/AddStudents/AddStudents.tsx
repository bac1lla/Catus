import React, {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import Wrapper from "./style";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import GroupUserCard from "../GroupUserCard/GroupUserCard";
import {IUser} from "../../models/IUser";
import {Simulate} from "react-dom/test-utils";
import transitionEnd = Simulate.transitionEnd;

interface IAddStudentsProps {
    onConfirm: (users: Set<IUser>) => void,
    setShow: Dispatch<SetStateAction<boolean>>
    showLogin?: boolean
}

const AddStudents: FC<IAddStudentsProps> = ({onConfirm, setShow, showLogin = false}) => {

    const [searchName, setSearchName] = useState<string>("")
    const [searchGroup, setSearchGroup] = useState<string>("")
    const [chosenStudents, setChosenStudents] = useState<Set<IUser>>(new Set<IUser>())
    const {user, projects, groups} = useContext(Context)

    useEffect(() => {
        if (user.user().role !== "STUDENT") {
            user.fetchAllUsers()
        }
    }, [])

    // const deleteUser = (newUser: IUser) => {
    //     user.refreshUser(newUser.id, {groupId: undefined})
    // }

    const mapUsers = (users: IUser[]) => {
        return users
            .filter((newUser, i, arr) => newUser.role === "STUDENT"
                && newUser.name.toLowerCase().includes(searchName.toLowerCase().trim())
                && (newUser.group?.id ?
                    newUser.group.name.toLowerCase().includes(searchGroup.toLowerCase().trim())
                    : !searchGroup)
                // && (showLogin ?
                //     // true
                //     !user.usersList().users.some(item => (item.id === newUser.id) && ((item.group === null ? true : item.group.id) === (newUser.group === null ? true : newUser.group.id)))
                //     :
                //     !user.usersList().users.some(item => item.id === newUser.id))
            )
            .map(user => <GroupUserCard key={user.id} user={user} onClick={() => addUser(user)}
                                        chosenStudents={chosenStudents} showLogin={showLogin}/>)
    }

    const addUser = (user: IUser) => {
        // @ts-ignore
        setChosenStudents(prev => new Set([...prev, user]))
    }

    const hide = () => {
        onConfirm(chosenStudents);
        setChosenStudents(new Set([]))
        setShow(false)
    }

    return (
        <Wrapper>
            <Wrapper.Header>Add students</Wrapper.Header>
            <Wrapper.Row>
                <Wrapper.Search>
                    <Wrapper.Label>Name</Wrapper.Label>
                    <Wrapper.Input value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
                    {
                        showLogin ?
                            <></> :
                            <>
                                <Wrapper.Label>Group</Wrapper.Label>
                                <Wrapper.Input value={searchGroup} onChange={(e) => setSearchGroup(e.target.value)}/>
                            </>
                    }
                </Wrapper.Search>
            </Wrapper.Row>
            <Wrapper.List>
                {
                    mapUsers(user.usersList().users)
                }
            </Wrapper.List>
            <Wrapper.Row>
                <Wrapper.Btn variant={"green"} onClick={hide}>
                    Confirm
                </Wrapper.Btn>
                <Wrapper.Btn variant={"blue"} onClick={hide}>
                    Cancel
                </Wrapper.Btn>
            </Wrapper.Row>
        </Wrapper>
    );
};

export default observer(AddStudents);