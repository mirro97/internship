<template>
  <div class="tiptap">
    <div v-if="editor">
      <div class="btn-container">
        <button
          class="edit-btn"
          :class="{ 'is-active': editor.isActive('bold') }"
          @click="editor.chain().focus().toggleBold().run()"
        >
          굵게
        </button>
        <button
          class="edit-btn"
          :class="{ 'is-active': editor.isActive('italic') }"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          기울임꼴
        </button>
        <button
          class="edit-btn"
          :class="{ 'is-active': editor.isActive('strike') }"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          취소선
        </button>
        <button
          class="edit-btn"
          @click="editor.chain().focus().unsetAllMarks().run()"
        >
          표시 지우기
        </button>
        <button
          class="edit-btn"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        >
          h1
        </button>
        <button
          class="edit-btn"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        >
          h2
        </button>
        <button
          class="edit-btn"
          :class="{ 'is-active': editor.isActive('bulletList') }"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          리스트 (원)
        </button>
        <button
          class="edit-btn"
          :class="{ 'is-active': editor.isActive('orderedList') }"
          @click="editor.chain().focus().toggleOrderedList().run()"
        >
          리스트 (숫자)
        </button>
        <button
          class="edit-btn"
          :class="{ 'is-active': editor.isActive('codeBlock') }"
          @click="editor.chain().focus().toggleCodeBlock().run()"
        >
          코드 블럭
        </button>
        <button
          class="edit-btn"
          :class="{ 'is-active': editor.isActive('blockquote') }"
          @click="editor.chain().focus().toggleBlockquote().run()"
        >
          인용 블락
        </button>
        <button class="edit-btn" @click="editor.chain().focus().undo().run()">
          실행 취소
        </button>
        <button class="edit-btn" @click="editor.chain().focus().redo().run()">
          실행 되돌리기
        </button>
      </div>
    </div>
    <editor-content :editor="editor" class="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
  },

  data() {
    return {
      editor: null,
      content: '',
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [StarterKit],
      content: `dd
      `,
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  updated() {
    this.content = this.editor.getHTML()
    this.$emit('updateContent', this.content)
  },
}
</script>

<style>
.tiptap {
  border: 1px solid #000;
  border-radius: 5px;
  margin-bottom: 10px;
}

/* Basic editor styles */
ul,
ol {
  padding: 0 1rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.1;
}

code {
  background-color: rgba(#616161, 0.1);
  color: #616161;
}

pre {
  background: #0d0d0d;
  color: #fff;
  font-family: 'JetBrainsMono', monospace;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}

pre code {
  color: inherit;
  padding: 0;
  background: none;
  font-size: 0.8rem;
}

img {
  max-width: 100%;
  height: auto;
}

blockquote {
  padding-left: 1rem;
  border-left: 2px solid rgba(#0d0d0d, 0.1);
}

hr {
  border: none;
  border-top: 2px solid rgba(#0d0d0d, 0.1);
  margin: 2rem 0;
}

.ProseMirror-focused {
  outline: none;
}

/* custom css */
.editor {
  padding: 12px 18px;
  min-height: 600px;
}

.btn-container {
  display: flex;
}

.edit-btn {
  border: none;
  padding: 3px 10px;
  width: 100%;
  background-color: #ffec99;
}
</style>
