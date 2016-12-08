<template>
<div id="app">
    <div class="container-fluid">
        <div class="row">
            <Toolbar></Toolbar>
            <NotesList></NotesList>
            <Editor></Editor>
        </div>
    </div>
</div>
</template>

<script>


import store from './store'
import Toolbar from './components/toolBar.vue';
import NotesList from './components/noteList.vue';
import Editor from './components/editor.vue';
export default {
    name: 'app',
    store,
    components: {
        Toolbar,
        NotesList,
        Editor
    }
}
</script>

<style>
html,
body,
.container-fluid,
.row,
#app {
    height: 100%;
}
</style>
