import React, {FC, useContext, useEffect, useState} from 'react';
import Member from "./style"
import {observer} from "mobx-react-lite";
import TrashIcon from "../../assets/img/trashIcon.png";


interface IGroupMemberProps {
    name: string;
    groupName: string;
    onDelete: () => void
}

const GroupMember: FC<IGroupMemberProps> = ({name, groupName, onDelete}) => {
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
                        : <Member.Text>Not in group</Member.Text>
                }
            </Member.Col>
            <Member.Trash src={TrashIcon} onClick={onDelete}/>
        </Member>
    );
};

export default observer(GroupMember);

