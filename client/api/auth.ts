export interface IUserAuth {
    id: number;
    name: string;
    email: string;
    avatar: string;
    role: {
        id: number;
        name: string;
    };
}

export interface IAction {
    type: string;
    text: string;
}

const userAuth = {
    id: 0,
    name: '',
    email: '',
    avatar: '',
    role: {
        id: 0,
        name: '',
    },
};

export function userReducer(state: IUserAuth = userAuth, action: IAction): IUserAuth {
    switch (action.type) {
        default:
            return state;
    }
}
