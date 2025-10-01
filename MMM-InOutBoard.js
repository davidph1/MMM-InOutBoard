Module.register("MMM-InOutBoard", {

  defaults: {
    numberOfNames: 2,
    names: [
      {name: "Alice", key: "A"},
      {name: "Bob", key: "B"},
  },

  getStyles() {
    return ["InOutBoard.css"]
  },

  start() {
     // Log module start
    Log.info(`Starting module: ${this.name}`);

    // Add event listeners for both "keydown" and "scroll wheel" events
    document.addEventListener("keydown", this.handleKeyEvent.bind(this));

    //set Toggle array
    for(let i = 0; i < this.config.numberOfNames; i+=1{
      this.toggleArray[i] = 0;
  }
  },

  /**
   * Render the page we're on.
   */
  getDom() {
    const wrapper = document.createElement("div")
    wrapper.innerHTML = `<b>Title</b><br />${this.templateContent}`

    return wrapper
  },

  handleKeyEvent (event) {
    // Extract key information from the event
    const key = event.key.toUpperCase();
    const {keyCode} = event;
    const {code} = event;

    // Find a matching notification based on the pressed key and 
    const matchingindex = this.config.names.findindex((key) => key === keyCode || key === key || key === code);

    if (matchingindex > -1){
    if (this.toggleArray[matchingindex]===0){
      this.toggleArray[matchingindex] = 1;
      this.updatedom();
    }
    else{
      this.toggleArray[matchingindex] = 0;
      this.updatedom();
    }}
  },
})
