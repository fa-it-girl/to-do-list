const app = Vue.createApp({
  data() {

    return { goals: [], userIn: " "};
  },

  methods: {
    userInput(event){
      this.goals.push(this.userIn)
    },

    removeGoal(index){
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
