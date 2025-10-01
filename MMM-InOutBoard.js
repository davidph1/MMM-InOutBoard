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
  createTable1: function () {
        var MMMinOutDiv = document.createElement('div');
        MMMinOutDiv.classList.add('MMM-inOutBoard');
        var inOutHeader = document.createElement('div')
        inOutHeader.className = 'medium'
        var headerSpan = document.createElement('span')
        headerSpan.classList.add('medium', 'bright')
        headerSpan.setAttribute('align', 'right')
        headerSpan.innerHTML = "In & Out Board"
        inOutHeader.appendChild(headerSpan)
        MMMinOutDiv.appendChild(inOutHeader)

        // Create table for first set of data
        var table1 = document.createElement("table");
        var table1Header = document.createElement("thead");
        var table1Body = document.createElement("tbody");

        // Create header row for Name
        var table1HeaderRow = document.createElement("tr");
        const nameHead = document.createElement('td');
        nameHead.setAttribute('align', 'center');
        nameHead.innerHTML = "Name";
        table1HeaderRow.appendChild(nameHead)
        // Create header row for Key
        const keyHead = document.createElement('td');
        keyHead.setAttribute('align', 'center');
        keyHead.innerHTML = 'Key';
        table1HeaderRow.appendChild(keyHead)
        // Create header row for indication
        const whereHead = document.createElement('td');
        whereHead.setAttribute('align', 'center');
        whereHead.innerHTML = 'In or Out';
        table1HeaderRow.appendChild(whereHead)
        
        // Append header row to table1 header
        table1Header.appendChild(table1HeaderRow);
        // Populate table1 body with data
        for (let z = 0; z < this.config.numberOfNames; z+=1) {
            var row = document.createElement("tr");
            const pos = document.createElement("td");
            pos.setAttribute('align', 'left');
            pos.innerHTML = this.config.names[z].name;
            row.appendChild(pos);

            const teamName = document.createElement('td');
            teamName.setAttribute('align', 'left');
            teamName.innerHTML = this.config.names[z].key;
            row.appendChild(teamName);
          
            const teamPoints = document.createElement('td');
            teamPoints.setAttribute('align', 'right');
            teamPoints.innerHTML = this.toggleArray[z];
            row.appendChild(teamPoints);
            table1Body.appendChild(row);
        };

        table1.appendChild(table1Header);
        table1.appendChild(table1Body);
        MMMinOutDiv.appendChild(table1)

        return MMMinOutDiv;
    },
})
