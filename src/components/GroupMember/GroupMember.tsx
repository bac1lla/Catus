import React, {FC, useContext} from 'react';
import Member from "./style"
import {observer} from "mobx-react-lite";
import TrashIcon from "../../assets/img/trashIcon.png";
import {Context} from "../../index";
import {IUser} from "../../models/IUser";
import {useParams} from "react-router";

interface IGroupMemberProps {
    name: string;
    groupName: string;
    onDelete: () => void,
    member: IUser
}

const GroupMember: FC<IGroupMemberProps> = ({name, groupName, onDelete, member}) => {
    const params = useParams()
    const {projects, user} = useContext(Context)

    const deleteFromProject = async () => {
        await projects.deleteFromProject(member.id, Number(params.id))
        await projects.fetchAllUsersInProject(member.id, Number(params.id))
    }

    return (
        <Member>
            <Member.Icon>{member.name[0]}</Member.Icon>
            <Member.Col gap={6}>
                <Member.Text>{member.name}</Member.Text>
                {
                    groupName ?
                        <Member.Text>Group: {groupName}</Member.Text>
                        : <Member.Text>Not in group</Member.Text>
                }
            </Member.Col>
            {
                user.user().role !== "STUDENT" ?
                    <Member.Trash src={TrashIcon} onClick={deleteFromProject}/>
                    : <></>
            }
        </Member>
    );
};

export default observer(GroupMember);

