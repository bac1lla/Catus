export interface IGroupTask {
    type: string,
    groupDeadline: string,
    description: string
    comments: number
}

export interface IGroupMember {
    name: string,
    group: string
}

export interface IProjectCard {
    lessonName: string
    tasks: number,
    students: number,
    teacherName: string
}