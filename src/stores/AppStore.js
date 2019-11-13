import React from 'react';
import Reflux from 'reflux';
import Actions from './Actions/Actions';


class AppStore extends Reflux.Store{
    constructor(){
        super();
        this.listenables = Actions;
    }
} 

export default AppStore;
