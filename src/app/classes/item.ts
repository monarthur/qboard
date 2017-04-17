import { Label } from './label'

export class Item {
    id: string;
    name: string;
    description: string;
    projectId: string;
    stateId: string;
    assigneeId: string;
    labels: Array<Label>;
}