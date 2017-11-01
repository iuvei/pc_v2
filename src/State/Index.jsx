import { observable, toJS } from 'mobx';

class StateVar {
    @observable todoList = [];
    @observable homeMainLeftActive = true;
}

export const stateVar = toJS(new StateVar());
