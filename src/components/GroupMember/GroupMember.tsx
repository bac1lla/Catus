import React, {FC} from 'react';
import Member from "./style"

interface IGroupMemberProps{
    name: string;
    // group: string;
    groupID: string;
}

const GroupMember: FC<IGroupMemberProps> = ({name,groupID}) => {
// const GroupMember: FC<IGroupMemberProps> = ({name,group}) => {
    return (
        <Member>
            <Member.Icon>{name[0]}</Member.Icon>
            <Member.Col gap={6}>
                <Member.Text>{name}</Member.Text>
                <Member.Text>{groupID}</Member.Text>
            </Member.Col>
        </Member>
    );
};

export default GroupMember;

