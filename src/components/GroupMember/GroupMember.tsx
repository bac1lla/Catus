import React, {FC, useContext, useEffect, useState} from 'react';
import Member from "./style"
import {Context} from "../../index";
import group from "../Group/Group";
import {observer} from "mobx-react-lite";

interface IGroupMemberProps {
    name: string;
    groupName: string;
}

const GroupMember: FC<IGroupMemberProps> = ({name, groupName}) => {
// const GroupMember: FC<IGroupMemberProps> = ({name,group}) => {
//     const {groups} = useContext(Context)
    // const [groupName, setGroupName] = useState<string | undefined>(undefined)
    // useEffect(() => {
    // fetchGroupName()
    // }, [groupID])


    return (
        <Member>
            <Member.Icon>{name[0]}</Member.Icon>
            <Member.Col gap={6}>
                <Member.Text>{name}</Member.Text>
                {
                    groupName ?
                        <Member.Text>Group: {groupName}</Member.Text>
                        : <></>
                }
            </Member.Col>
        </Member>
    );
};

export default observer(GroupMember);

