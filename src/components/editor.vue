<template  >
<div class="col-md-8" id="editor">
    <div class="title">
        <input class="form-control" id="node-title" v-model='title' placeholder="我的笔记">
    </div>
    <div class="main">
        <textarea name="note" id="note-main" v-model='content' class="form-control" rows="30"></textarea>
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    computed: {
        title: {
            get() {
                return this.$store.state.activeNote.title
            },
            set(value) {
                this.$store.commit('EDIT_TITLE', value)
            }
        },

        content: {
            get() {
                return this.$store.state.activeNote.content
            },
            set(value) {
                this.$store.commit('EDIT_CONTENT', value)
            }
        }

    }


}
</script>

<style lang="css">
</style>
