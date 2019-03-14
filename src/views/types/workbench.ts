export class Menu {
  public authority = '';
  public enabled = false;
  public icon = '';
  public id = '';
  public name = '';
  public orderNum = 0;
  public path = '';
  public pid = '';
  public shortcut = false;
  public color = ''
}

export class MenuTree {
  public icon = '';
  public id = '';
  public name = '';
  public color = '';
  public leaf = false;
  public children: MenuTree[] = []
}

export class Workbench {
  public menuGroup = new MenuGroup();
  public menus: Menu [] = [];

}


export class MenuGroup {
  public id = '';
  public name = '';
  public teamId = ''
}

export class MenuGroupDelete {
  private teamId: string;
  private menuGroupId: string;

  constructor(teamId: string, menuGroupId: string) {
    this.teamId = teamId;
    this.menuGroupId = menuGroupId;
  }
}

export class GroupMenu {
  private teamId: string;
  private menuGroupId: string;
  private menuId: string;


  constructor(teamId: string, menuGroupId: string, menuId: string) {
    this.teamId = teamId;
    this.menuGroupId = menuGroupId;
    this.menuId = menuId;
  }
}
