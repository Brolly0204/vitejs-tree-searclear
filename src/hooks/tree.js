const tree = [
  {
    id: 1,
    name: '物业服务中心',
    type: 1,
    child: [
      // {
      //   id: 9,
      //   name: '账号1',
      //   type: 2,
      //   child: [
      //     {
      //       id: 91,
      //       name: '北京林业大学2023年开水器维修维护项目合同尾款',
      //       type: 3,
      //     },
      //     {
      //       id: 99,
      //       name: '项目111',
      //       type: 3,
      //     },
      //     {
      //       id: 2,
      //       name: '北京林业大学学生公寓、办公楼、二教等楼宇开水器',
      //       type: 3,
      //     },
      //     {
      //       id: 3,
      //       name: '北京林业大学新建学生公寓及配套用房开水器采购项目，5%质保金',
      //       type: 3,
      //     },
      //     {
      //       id: 4,
      //       name: '北京林业大学2022-2023年西区售电系统维保服务合同尾款',
      //       type: 3,
      //     },
      //     {
      //       id: 5,
      //       name: '林大图书馆2024年新书购买项目111',
      //       type: 3,
      //     },
      //   ],
      // },
      // {
      //   id: 11,
      //   name: '账号1',
      //   type: 2,
      //   child: [
      //     // {
      //     //   id: 111,
      //     //   name: '项目222',
      //     //   type: 3,
      //     // },
      //   ],
      // },
      // {
      //   id: 15,
      //   name: '子活动1',
      //   type: 2,
      //   child: [
      //     {
      //       id: 19,
      //       name: '子活动1的项目修改',
      //       type: 3,
      //     },
      //   ],
      // },
    ],
  },
  {
    id: 2,
    name: '水电服务中心',
    type: 1,
    child: [
      {
        id: 13,
        name: '账号1',
        type: 2,
        child: [
          {
            id: 133,
            name: '项目333',
            type: 3,
          },
        ],
      },
      {
        id: 17,
        name: '子活动2',
        type: 2,
        child: [
          {
            id: 7,
            name: '林大图书馆1223年新书购买项目222',
            type: 3,
          },
        ],
      },
      {
        id: 27,
        name: '北京',
        type: 2,
        child: [],
      },
    ],
  },
  {
    id: 3,
    name: '信息管理服务中心',
    type: 1,
    child: [
      {
        id: 5,
        name: '宿舍楼能耗费用',
        type: 2,
        child: [
          {
            id: 3,
            name: '北京林业大学新建学生公寓及配套用房开水器采购项目，5%质保金',
            type: 3,
          },
          {
            id: 4,
            name: '北京林业大学2022-2023年西区售电系统维保服务合同尾款',
            type: 3,
          },
          {
            id: 5,
            name: '林大图书馆2024年新书购买项目111',
            type: 3,
          },
        ],
      },
      {
        id: 19,
        name: '子活动3',
        type: 2,
        child: [],
      },
      {
        id: 21,
        name: '子活动4',
        type: 2,
        child: [],
      },
    ],
  },
  {
    id: 4,
    name: '出纳服务中心',
    type: 1,
    child: [],
  },
];
// 子节点查找 找不到回溯
const findChild = (list = [], childs = []) => {
  let defNode = null;
  for (let i = 0; i < list.length; i++) {
    const node = (defNode = list[i]);
    childs.push(node.id);
    if (node.child && node.child.length) {
      defNode = findChild(node.child, childs);
    }
    if (defNode && defNode.type === 3) {
      return defNode;
    }
    // 回溯
    childs.pop();
  }
};

const searchTree = (tree) => {
  console.log('tree', tree);
  let defNode = null;
  let expands = [];

  const find = (list = []) => {
    for (let node of list) {
      defNode = null;
      expands = [];
      let childs = [node.id];
      if (node.child && node.child.length) {
        defNode = findChild(node.child, childs);
      }
      if (defNode) {
        expands = [...expands, ...childs];
        return defNode;
      }
    }
    return defNode;
  };
  const nNode = find(tree, expands);
  console.log('searchTree', nNode, expands);
};
searchTree(tree);


// 只考虑每层第一个节点 查找到底
// const findDefSelectedNode = (tree = []) => {
    //   let defNode = null
    //   const expandedKeys = []
    //   const find = (node) => {
    //     if (node && node.child && node.child.length) {
    //       expandedKeys.push(node.tid)
    //       return find(node.child[0])
    //     }
    //     return node
    //   }
    //   if (tree[0]) {
    //     defNode = find(tree[0])
    //   }
    //   return { node: defNode, expandedKeys }
    // }