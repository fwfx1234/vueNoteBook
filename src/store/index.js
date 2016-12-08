import Vue from "vue";
import Vuex from "vuex";
import * as actions from './actions'
import * as getters from './getters'
Vue.use(Vuex);

//定义维护的状态
const state = {
    notes: [
        //  { //id:
        // title: '',
        //  content: '',
        // favorite: false
        //    }
    ], //笔记列表
    activeNote: {}, //活动的笔记
    show: "" //显示的笔记
}
//提交状态
var data = {
    notes: [
        { //id:
            // title: '',
            //  content: '',
            // favorite: false
        }
    ], //笔记列表
    activeNote: {}, //活动的笔记
    show: "" //显示的笔记
}
const mutations = {
    //初始化笔记本
    INIT_NOTE(state, data) {
        console.log(data);
        state.notes = data.notes;
        state.show = data.show;
        state.activeNote = data.activeNote;
    },
    ADD_NOTE(state) {
        var newNote = {
            id: + new Date(), //获取时间作为id
            title: '新建笔记',
            content: '',
            favorite: false
        };
        state.notes.push(newNote);
        state.activeNote = newNote;
    },
    EDIT_TITLE(state, title) {
        state.activeNote.title = title;
        // 修改原始数据
        for (var i = 0; i < state.notes.length; i++) {
            if (state.notes[i].id === state.activeNote.id) {
                state.notes[i].title = title;
                break;
            }
        };
    },
    EDIT_CONTENT(state, content) {
        state.activeNote.content = content;
        // 修改原始数据
        for (var i = 0; i < state.notes.length; i++) {
            if (state.notes[i].id === state.activeNote.id) {
                state.notes[i].content = content;
                break;
            }
        };
    },
    // 删除笔记
    DELETE_NOTE(state) {
        for(var i=0; i<=state.notes.length;i++){
            if(state.notes[i]==state.activeNote){
              state.notes.splice(i,1);
            }
        }
        state.activeNote = state.notes[0] || {};
    },
    // 切换笔记的收藏与取消收藏
    TOGGLE_FAVORITE(state) {
        state.activeNote.favorite = !state.activeNote.favorite;
    },
    // 切换显示数据列表类型：全部 or 收藏
    SET_SHOW_ALL(state, show) {
      console.log(show)
        state.show = show;
        // 切换数据展示，需要同步更新 activeNote
        if (show === 'favorite') {
            state.activeNote = state.notes.filter(note => note.favorite)[0] || {};
        } else {
            state.activeNote = state.notes[0] || {};
        }
    },
    // 设置当前激活的笔记
    SET_ACTIVE_NOTE(state, note) {
        state.activeNote = note;
    }
}
export default new Vuex.Store({state,
    getters,
    mutations,
    actions,
    strict: true
})
