import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Avatar } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router';
import { GroupsWithOwner } from '../../features/group/reducer';
import { createGroupByName, updateGroups } from '../../features/group/actions';
import { IState } from '../../store';

const { SubMenu } = Menu;

type GroupProps = {
  groups: GroupsWithOwner[];
  updateGroups: () => void;
  createGroupByName: (name: string) => void;
};

type PathProps = RouteComponentProps;

type MenuState = {
  showModal: boolean;
};

class SideMenu extends React.Component<GroupProps & PathProps, MenuState> {
  state = {
    showModal: false
  };

  onClick = (menu: any) => {
    if (menu.key === 'addGroup') {
      console.log(menu);
    } else if (menu.keyPath[menu.keyPath.length - 1] === 'groups') {
      console.log(menu);
    } else {
      const path = menu.keyPath.reverse().join('/');
      this.props.history.push(`/${path}`);
    }
  };

  componentDidMount() {
    this.props.updateGroups();
  }
  render() {
    const groupsByOwner = this.props.groups;
    return (
      <Menu
        mode="inline"
        defaultOpenKeys={['todo']}
        style={{ height: '100%', fontWeight: 500 }}
        onClick={this.onClick}
      >
        <SubMenu key="todo" title="TODO">
          <Menu.Item key="today">
            <Icon type="carry-out" />
            Today
          </Menu.Item>
          <Menu.Item key="next7days">
            <Icon type="calendar" />
            Next 7 days
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="projects"
          title={
            <span>
              <Icon type="folder" />
              <span>Bullet Journal</span>
            </span>
          }
        ></SubMenu>
        <SubMenu
          key="groups"
          title={
            <span>
              <Icon type="team" />
              <span>Groups</span>
            </span>
          }
        >
          <Menu.Item key="addGroup">
            <Icon type="usergroup-add" style={{ fontSize: 20 }} />
          </Menu.Item>
          {groupsByOwner.map((groupsOwner, index) => {
            return groupsOwner.groups.map(group => (
              <Menu.Item key={group.id}>
                <span className="group-title">
                  <span>
                    <Avatar
                      size="small"
                      style={
                        index === 0
                          ? {
                              backgroundColor: '#f56a00'
                            }
                          : {
                              backgroundColor: '#fde3cf'
                            }
                      }
                    >
                      {group.owner.slice(1, 3)}
                    </Avatar>
                    <span
                      className="group-name"
                      title={
                        'Group "' +
                        group.name +
                        '" owned by "' +
                        group.owner +
                        '"'
                      }
                    >
                      {group.name}
                    </span>
                  </span>
                </span>
              </Menu.Item>
            ));
          })}
        </SubMenu>
        <Menu.Item key="labels">
          <Icon type="flag" />
          Labels
        </Menu.Item>
        <Menu.Item key="settings">
          <Icon type="setting" />
          Settings
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  groups: state.group.groups
});

export default connect(mapStateToProps, { updateGroups, createGroupByName })(
  withRouter(SideMenu)
);
