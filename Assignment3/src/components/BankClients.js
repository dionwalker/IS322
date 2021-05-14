import {combineReducers} from "redux";

const DEFAULT_State = {
    clients: [
        {id: 1, name: "Adam Johnson", email: "Adam.Johnson@test.org", balance: "$240", history: "- $360", type: "withdraw"},
        {id: 2, name: "Bob Smith", email: "Bob.Smith@test.org", balance: "$5000", history: "+ $4120", type: "deposit"},
        {id: 3, name: "Carol James", email: "Carol.James@test.org", balance: "$1345", history: "+ $345", type: "deposit"},
        {id: 4, name: "Dan Thomas", email: "Dan.Thomas@test.org", balance: "$ 500", history: "- 1500", type: "withdraw"},
    ],
withdraws: [],
deposits: [],
};

const sortClients = (state) => {
    let newState ={
        clients: [...state.clients],
        withdraws: [],
        deposits: [],
    };

    newState.clients.forEach(client=> {
        if(client.type === "withdraw"){
            newState.withdraws.push(client);
        }else if (client.type === "deposit"){
            newState.deposits.push(client);
        }
    });

    return newState;
};

const clientReducer = (state, action) => {
    switch (action.type){
        case 'withdraws':
        case 'deposits':
        default:
            return !state ? sortClients (DEFAULT_State): state;
    }
};

    export default combinedReducers({
        clients: clientReducer
    });