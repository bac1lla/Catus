import React, {FC} from 'react';
import Member from "./style"

interface IGroupMemberProps{
    name: string;
    group: string;
}

const GroupMember: FC<IGroupMemberProps> = ({name,group}) => {
    return (
        <Member>
            <Member.Icon>{name[0]}</Member.Icon>
            <Member.Col gap={6}>
                <Member.Text>{name}</Member.Text>
                <Member.Text>{group}</Member.Text>
            </Member.Col>
        </Member>
    );
};

export default GroupMember;

