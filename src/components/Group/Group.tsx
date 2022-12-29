import React, {FC} from 'react';
import {IGroupMin} from "../../models/response/GroupsResponse";
import GroupStyled from "./style";

interface IGroupProps {
    group: IGroupMin
    onClick: (group: IGroupMin) => void
}

const Group: FC<IGroupProps> = ({group, onClick}) => {
    return (
        <GroupStyled
            onClick={() => onClick(group)}
        >
            <GroupStyled.Name>{group.name}</GroupStyled.Name>
            <GroupStyled.Count>{group.userCount}</GroupStyled.Count>
        </GroupStyled>
    );
};

export default Group;

