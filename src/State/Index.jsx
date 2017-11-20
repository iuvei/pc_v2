import { observable, toJS } from 'mobx';


class StateVar {
    @observable childNavIndex = 0;
    @observable todoList = [];
    @observable homeMainLeftActive = true;
}

export const stateVar = toJS(new StateVar());
