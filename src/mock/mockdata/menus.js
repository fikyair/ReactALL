export default [
    {key: 'top1', icon: 'meh-o', text: '顶级菜单1'},
    {key: 'top11', parentKey: 'top1', icon: 'star-o', text: '百度', url: 'https://www.baidu.com'},
    {key: 'top12', parentKey: 'top1', icon: 'cloud-o', text: 'antd', url: 'https://ant.design/index-cn'},
    {key: 'top2', icon: 'frown-o', text: '顶级菜单2'},
    {key: 'top21', parentKey: 'top2', icon: 'trophy', text: '错误页面', path: '/sub2'},

    {key: 'example', text: '菜单一', icon: 'smile-o', path: ''},
    {key: 'user-center', parentKey: 'example', text: '用户中心', icon: 'user', path: '/user-center', order: 10011},
    {key: 'user', parentKey: 'example', text: '用户列表', icon: 'rocket', path: '/example/users', order: 10011},
    {key: 'role', parentKey: 'example', text: '角色列表 ', icon: 'bulb', path: '/example/roles', order: 10011},
];
