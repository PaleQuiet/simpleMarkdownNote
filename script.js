new Vue({
  el: '#notebook',
  data() {
    return {
      content: 'This is a **note**',
      notes: []
    }
  },
  computed: {
    notePreview() {
      return marked(this.content)
    }
  },
  methods: {
    saveNote() {
      console.log('saving note:', this.content)
      localStorage.setItem('content', this.content)
      this.reportOperation('saving')
    },
    reportOperation(opName) {
      console.log('The', opName, 'poeration was completed!');
    },
    addNote() {
      const  time = Date.now()
      const note = {
        id: String(time),
        title: 'New note ' + (this.notes.length + 1),
        content: '**Hi!** This notebook is using [markdown] (https: //github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting !',
        created: time,
        favorite: false,
      }
      this.notes.push(note)
    }
  },
  watch: {
    content: { 
      handler: 'saveNote'
    }
    // content: 'saveNote'
  },
  created() {
    this.content = localStorage.getItem('content') || 'You can write in ** markdown **'
  },
})
console.log('restored not:', localStorage.getItem('content'));


