import { Item } from './item';

export class State {
    id: string;
    name: string;
    index: number;
    projectId: string;
    items: Array<Item>;
}