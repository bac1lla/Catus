import UserStore from "./UserStore";
import ProjectsStore from "./ProjectsStore";
import GroupsStore from "./GroupsStore";
import CommentsStore from "./CommentsStore";
import TasksStore from "./TasksStore";

export interface IState {
    user: UserStore;
    projects: ProjectsStore;
    groups: GroupsStore;
    comments: CommentsStore;
    tasks: TasksStore;
}

const state: IState = {
    user: new UserStore(),
    projects: new ProjectsStore(),
    groups: new GroupsStore(),
    comments: new CommentsStore(),
    tasks: new TasksStore(),
}

export default state