//模拟初始化数据
const initNote = {
  id: +new Date(),
  title: '第一篇',
  content: '第一篇笔记内容',
  favorite: false
};

// 模拟初始化数据
const initData = {
  show: 'all',
  notes: [initNote],
  activeNote: initNote
};

export const init= ({commit})=>{
  console.log(initData);
  commit('INIT_NOTE',initData)
}

export const newNote = ({commit})=>{

      commit('ADD_NOTE');

}
export const editeNote = ({commit})=>{

      commit('EDIT_NOTE');

}
export const delNote = ({commit,state})=>{
      commit('DELETE_NOTE');
      if(state.notes.length==0){
        commit('ADD_NOTE');
      }

}
export const favoriteNote = ({commit})=>{

      commit('TOGGLE_FAVORITE');

}
export const showAll = ({commit},show)=>{

      commit('SET_SHOW_ALL',show);

}
// export const editeTitle = ({commit},title)=>{
//       commit('EDIT_TITLE',title)
//
// }
// export const editeContent = ({commit},content)=>{
//       commit('EDIT_CONTENT',content)

//}
export const setActive = ({commit},note)=>{
      commit('SET_ACTIVE_NOTE',note)

}
