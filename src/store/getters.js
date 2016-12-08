 export const notes = (state)=>{
   if(state.show === 'all'){
     return state.notes || {};
   }else if(state.show === 'favorite'){
     return state.notes.filter(note => note.favorite) || {};
   }
}
 export const activeNote = (state)=>{
  return state.activeNote;
}
 export const show = (state)=>{

  return state.show;
}
