import {makeAutoObservable} from "mobx";
import {IGroup, IGroupsList} from "../models/response/GroupsResponse";
import GroupsService from "../services/GroupsService";


export default class GroupsStore {

    constructor() {
        makeAutoObservable(this)
    }

    async fetchGroup(groupId: number): Promise<IGroup | undefined> {
        try {
            this.setIsLoading(true)
            const response = await GroupsService.fetchGroup(groupId)
            console.log(response);
            this.setGroup(response)
            return response
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async changeGroup(groupId: number, name: string) {
        try {
            this.setIsLoading(true)
            const changedGroup = await GroupsService.changeGroup(groupId, name)
            this.setGroup({...this.group(), ...changedGroup})
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async deleteGroup(groupId: number) {
        try {
            this.setIsLoading(true)
            await GroupsService.deleteGroup(groupId)
            const newGroupsList = this.groupsList().groups.filter(group => group.id !== groupId)
            this.setGroupsList({
                groups: newGroupsList,
                total: newGroupsList.length
            })
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async addUserInGroup(groupId: number, userId: number) {
        try {
            this.setIsLoading(true)
            const response = await GroupsService.addUserInGroup(groupId, userId)
            this.setGroup(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async fetchGroupsList() {
        try {
            this.setIsLoading(true)
            const response = await GroupsService.fetchGroupsList()
            this.setGroupsList(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async createGroup(name: string) {
        try {
            this.setIsLoading(true)
            const newGroup = await GroupsService.createGroup(name)
            const newGroupList = [...this.groupsList().groups, newGroup]
            this.setGroupsList({
                groups: newGroupList,
                total: newGroupList.length
            })
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async deleteUserFromGroup(groupId: number, userId: number) {
        try {
            this.setIsLoading(true)
            await GroupsService.deleteUserFromGroup(groupId, userId)
            const newUsers = this.group().users.filter(user => user.id !== userId)
            this.setGroup({...this.group(), users: newUsers})
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    public group(): IGroup {
        return this._group;
    }

    private setGroup(value: IGroup) {
        this._group = value;
    }

    public isLoading(): boolean {
        return this._isLoading;
    }

    private setIsLoading(value: boolean) {
        this._isLoading = value;
    }

    public groupsList(): IGroupsList {
        return this._groupsList;
    }

    private setGroupsList(value: IGroupsList) {
        this._groupsList = value;
    }

    private _group: IGroup = {
        id: 0,
        name: "",
        users: []
    }
    private _groupsList: IGroupsList = {
        groups: [],
        total: 0
    }
    private _isLoading: boolean = false
}