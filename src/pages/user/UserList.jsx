import React, {Component} from 'react';

export const PAGE_ROUTE = '/example/users';

export default class UserList extends Component {
    constructor(...args) {
        super(...args);

        this.props.action.page.setTitle('用户列表');
    }

    render() {
        return (
            <div>用户列表页面</div>
        );
    }
}
