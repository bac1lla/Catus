import {IGroup, IGroupMin, IGroupsList} from "../models/response/GroupsResponse";
import Api from "../http";

export default class GroupsService {

    static async fetchGroup(groupId: number): Promise<IGroup> {
        return Api.get<IGroup>(`/groups/${groupId}`)
    }

    static async changeGroup(groupId: number, name: string): Promise<IGroupMin> {
        return Api.put<IGroupMin>(`/groups/${groupId}`, {name: name})
    }

    static async deleteGroup(groupId: number): Promise<void> {
        return Api.delete(`/groups/${groupId}`)
    }

    static async addUserInGroup(groupId: number, userId: number): Promise<IGroup> {
        return Api.put<IGroup>(`/groups/${groupId}/users`, {userId: userId})
    }

    static async fetchGroupsList(): Promise<IGroupsList> {
        return Api.get<IGroupsList>(`/groups`)
    }

    static async createGroup(name: string): Promise<IGroupMin> {
        return Api.post<IGroupMin>(`/groups`, {name: name})
    }

    static async deleteUserFromGroup(groupId: number, userId: number): Promise<void> {
        return Api.delete(`/groups/${groupId}/users/${userId}`)
    }

}