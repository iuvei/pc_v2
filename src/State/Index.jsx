import { observable, toJS } from 'mobx';

class StateVar {
    @observable todoList = [];
}

export const stateVar = toJS(new StateVar());
