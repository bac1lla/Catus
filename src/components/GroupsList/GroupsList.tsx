import React, {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import Group from "../Group/Group";
import Modal from "../Modal/Modal";
import GroupDetail from "../GroupDetail/GroupDetail";
import {IGroup, IGroupMin} from "../../models/response/GroupsResponse";
import {observer} from "mobx-react-lite";
import Groups from "./style";
import { Line } from '../../styles/styled-components';

interface IGroupList {
    showSidebar: boolean,
    toggleShowSidebar: Dispatch<SetStateAction<boolean>>
}

const GroupsList: FC<IGroupList> = ({showSidebar, toggleShowSidebar}) => {

    const {groups} = useContext(Context)
    const [showGroup, setShowGroup] = useState<boolean>(false)
    const [currentGroup, setCurrentGroup] = useState<IGroup>({id: 0, name: "", users: []} as IGroup)
    const [searchText, setSearchText] = useState<string>("")

    useEffect(() => {
        groups.fetchGroupsList()
    }, [groups.group()])

    // useEffect(() => {
    //     groups.fetchGroup(currentGroup.id)
    // }, [currentGroup])

    const getGroup = async (group: IGroupMin) => {
        await groups.fetchGroup(group.id)
        setCurrentGroup(groups.group())
        setShowGroup(true)
    }

    return (
        <Groups>
            <Groups.Header>
                <Line>
                    <Groups.BurgerBtn onClick={() => toggleShowSidebar(!showSidebar)} show={!showSidebar}/>
                    <Groups.Title>Groups</Groups.Title>
                </Line>
                <Groups.Search placeholder={"Find:"} value={searchText}
                               onChange={(e) => setSearchText(e.target.value)}/>
            </Groups.Header>
            <Groups.List>
                {searchText ?
                    groups.groupsList().groups
                        .filter(group => (group.name.toLowerCase()).indexOf(searchText) > -1)
                        .map(group =>
                            <Group key={group.id} group={group} onClick={getGroup}/>)
                    :
                    groups.groupsList().groups
                        .map(group => <Group key={group.id} group={group} onClick={getGroup}/>)}
            </Groups.List>
            <Modal setShow={setShowGroup} show={showGroup}>
                <GroupDetail group={currentGroup}/>
            </Modal>
        </Groups>
    );
};

export default observer(GroupsList);

