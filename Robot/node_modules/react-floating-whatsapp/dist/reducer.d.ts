type State = {
    isOpen: boolean;
    isDelay: boolean;
    isNotification: boolean;
};
type Action = {
    type: 'open';
} | {
    type: 'close';
} | {
    type: 'delay';
} | {
    type: 'notification';
};
export declare function reducer(state: State, action: Action): State;
export {};
