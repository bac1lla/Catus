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
    // const [searchGroup, setSearchGroup] = useState<string>("")
    const [chosenStudents, setChosenStudents] = useState<Set<IUser>>(new Set<IUser>())
    const {user, groups} = useContext(Context)

    useEffect(() => {
        user.fetchAllUsers()
        // groups.fetchGroup(user.user().groupID)
    }, [])

    // useEffect(() => {
    //     user.fetchAllUsers()
    // }, [chosenStudents])


    // const setUsers = (newUser: IUser) => {
    //     if (chosenStudents.has(newUser)) {
    //         chosenStudents.delete(newUser)
    //         setChosenStudents(chosenStudents)
    //     } else {
    //         setChosenStudents(chosenStudents.add(newUser))
    //     }
    // }

    // const deleteUser = (newUser: IUser) => {
    //     user.refreshUser(newUser.id, {groupId: undefined})
    // }

    const mapUsers = (users: IUser[]) => {
        return users.map(user => <GroupUserCard user={user} onClick={() => addUser(user)} chosenStudents={chosenStudents}/>)
        // return users.map(user => <GroupUserCard user={user} onClick={setUsers}/>)
    }

    const filterUsersByName = (users: IUser[]): IUser[] => {
        return users.filter(user => (user.name.toLowerCase()).indexOf(searchName.toLowerCase().trim()) > -1)
    }
    //
    // const filterUsersByGroup = (users: IUser[]): IUser[] => {
    //
    //     return users.filter(user => {
    //         let check = false
    //         groups.fetchGroup(user.groupID)
    //             .then(() => {
    //                 check = ((groups.group().name.toLowerCase()).indexOf(searchGroup.toLowerCase().trim()) > -1)
    //             })
    //     })
    // }


    // console.log(groups.group())

    const addUser = (user: IUser) => {

        setChosenStudents(prev => {
            // @ts-ignore
            return new Set([...prev, user]);
        })

    }
    const studentsWithSearch = (): React.ReactNode => {

       if (searchName) {
            return mapUsers(filterUsersByName(user.usersList().users))
        } else {
            return mapUsers(user.usersList().users)
        }
    }

    const hide = () => {
        onConfirm(chosenStudents);
        setChosenStudents(new Set())
        setShow(false)
    }

    return (
        <Wrapper>
            <Header>Add students</Header>
            <Row>
                <Search>
                    <Label>Name</Label>
                    <Input value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
                </Search>
                {/*<Search>*/}
                {/*    <Label>Group</Label>*/}
                {/*    <Input value={searchGroup} onChange={(e) => setSearchGroup(e.target.value)}/>*/}
                {/*</Search>*/}
            </Row>
            <List>
                {
                    studentsWithSearch()
                    // groups.group().users.map(user => <GroupUserCard user={user} /*onClick={addUser}*/ />)
                    // user.usersList().users.map(user => <GroupUserCard user={user} onClick={() => addUser(user)} />)
                }
            </List>
            <Row>
                <Btn
                    variant={"green"}
                    onClick={() => {
                        hide()
                        // console.log(chosenStudents)
                    }}
                >
                    Confirm
                </Btn>
                <Btn
                    variant={"blue"}
                    onClick={hide}
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
  width: 900px;

  @media (max-width: 1300px) {
    max-width: 800px;
    width: 800px;
  }

  @media (max-width: 700px) {
    max-width: 600px;
    width: 600px;
  }

  @media (max-width: 576px) {
    max-width: 95%;
  }
`

const Row = styled(Line)`
  width: 100%;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1300px) {
    gap: 30px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 576px) {
    width: 95%;
  }
`
const Label = styled(LightText)`

  @media (max-width: 576px) {
    font-size: 14px;
  }
`
const Search = styled(Column)`
  justify-content: center;
  align-items: center;

  @media (max-width: 1300px) {
    width: 70%;
  }

  @media (max-width: 700px) {
    width: 95%;
  }
`
const Input = styled.input`
  border: 1px solid ${textColorPrimary};
  border-radius: 50px;
  height: 40px;
  padding: 5px 15px;
  outline: none;
  width: 400px;
  max-width: 400px;

  @media (max-width: 1300px) {
    width: 350px;
    max-width: 350px;
  }

  @media (max-width: 700px) {
    width: 95%;
  }
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

  @media (max-width: 1300px) {
    width: 150px;
  }

  @media (max-width: 700px) {
    width: 95%;
  }
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

  @media (max-width: 1300px) {
    height: 350px;
    padding: 30px;
  }

  @media (max-width: 700px) {
    height: 300px;
    padding: 20px;
    border-radius: 20px;
  }

  @media (max-width: 576px) {
    height: 250px;
  }
`