import React, {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import {LightText, MainTitleText} from "../../styles/fonts";
import styled from "styled-components";
import {Column, Line} from "../../styles/styled-components";
import {
    accentColor3,
    accentColor4,
    accentColor5,
    backgroundColor,
    menuColor,
    textColorPrimary
} from "../../styles/colors";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import GroupUserCard from "../GroupUserCard/GroupUserCard";
import {IUser} from "../../models/IUser";

interface IAddStudentsProps {
    onConfirm: (users: Set<IUser>) => void,
    setShow: Dispatch<SetStateAction<boolean>>
}

const AddStudents: FC<IAddStudentsProps> = ({onConfirm, setShow}) => {

    const [searchName, setSearchName] = useState<string>("")
    const [searchGroup, setSearchGroup] = useState<string>("")
    const [chosenStudents, setChosenStudents] = useState<Set<IUser>>(new Set<IUser>())
    const {user} = useContext(Context)

    useEffect(() => {
        user.fetchAllUsers()
    },[])

    const setUsers = (newUser: IUser) => {
        if (chosenStudents.has(newUser)) {
            chosenStudents.delete(newUser)
            setChosenStudents(chosenStudents)
        } else {
            setChosenStudents(chosenStudents.add(newUser))
        }
    }

    const mapUsers = (users: IUser[])=> {
        return users.map(user => <GroupUserCard user={user} onClick={setUsers}/>)
    }

    const filterUsersByName = (users: IUser[]): IUser[] => {
        return users.filter(user => (user.name.toLowerCase()).indexOf(searchName.toLowerCase().trim()) > -1)
    }

    const filterUsersByGroup = (users: IUser[]): IUser[] => {
        return users.filter(user => (user.group.name.toLowerCase()).indexOf(searchGroup.toLowerCase().trim()) > -1)
    }

    const studentsWithSearch = (): React.ReactNode => {

        if (searchName && searchGroup) {
            return mapUsers(filterUsersByGroup(filterUsersByName(user.usersList().users)))
        } else if (searchName) {
            return mapUsers(filterUsersByName(user.usersList().users))
        } else if (searchGroup) {
            return mapUsers(filterUsersByGroup(user.usersList().users))
        } else {
            return mapUsers(user.usersList().users)
        }
    }

    return (
        <Wrapper>
            <Header>Add students</Header>
            <Row>
                <Search>
                    <Label>Name</Label>
                    <Input value={searchName} onChange={(e) => setSearchName(e.target.value)} />
                </Search>
                <Search>
                    <Label>Group</Label>
                    <Input value={searchGroup} onChange={(e) => setSearchGroup(e.target.value)} />
                </Search>
            </Row>
            <List>
                {
                    studentsWithSearch()
                    // user.usersList().users.map(user => <GroupUserCard user={user} onClick={addUser} />)
                }
            </List>
            <Row>
                <Btn
                    variant ={"green"}
                    onClick={() => onConfirm(chosenStudents)}
                >
                    Confirm
                </Btn>
                <Btn
                    variant ={"blue"}
                    onClick={() => setShow(false)}
                >
                    Cancel
                </Btn>
            </Row>
        </Wrapper>
    );
};

export default observer(AddStudents);

const Header = styled(MainTitleText)`

`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  max-width: 900px;
`
const Row = styled(Line)`
  width: 100%;
  justify-content: center;
  gap: 50px;
`
const Label = styled(LightText)`

`
const Search = styled(Column)`
  justify-content: center;
  align-items: center;

`
const Input = styled.input`
  border: 1px solid ${textColorPrimary};
  border-radius: 50px;
  height: 40px;
  padding: 5px 15px;
  outline: none;
  width: 400px;
  max-width: 400px;
`

interface IBtn {
    variant?: "green" | "blue" | "red"
}

const Btn = styled.button<IBtn>`
  width: 200px;
  height: 40px;
  border: 1px solid ${textColorPrimary};
  color: ${backgroundColor};
  border-radius: 15px;
  background-color: ${({variant}) => variant === "blue" ? accentColor3 : (variant === "red" ? accentColor5 : accentColor4)};
`

const List = styled.div`
  background: ${menuColor};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  width: 100%;
  height: 400px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`