Module.register("MMM-InOutBoard", {

  defaults: {
    numberOfNames: 2,
    names: [
      {name: "Alice", press: "A"},
      {name: "Bob", press: "B"}]
  },

  getStyles() {
    return ["InOutBoard.css"]
  },

  start() {
     // Log module start
    Log.info(`Starting module: ${this.name}`);
    // Add event listeners for both "keydown" and "scroll wheel" events
    document.addEventListener("keydown", this.handleKeyEvent.bind(this));
      this.toggleArray = [];
    //set Toggle array
    for(let i = 0; i < this.config.numberOfNames; i+=1){
      this.toggleArray[i] = "Out";
  }
  this.table1 = this.createTable1();
  this.updateDom();
  },

  getDom() {
    var wrapper = document.createElement("div")
    if (!this.table1) {
       this.table1 = document.createElement("table");
    }
    this.table1.style.display = "block";
    if (!wrapper.contains(this.table1)) {
       wrapper.appendChild(this.table1);
    }
    return wrapper
  },

  handleKeyEvent (event) {
    // Extract key information from the event
    const key = event.key.toUpperCase();
    const {keyCode} = event;
    const {code} = event;
	Log.log(key);
	Log.log(keyCode);
	Log.log(code);

    let k = "press";
    // Find a matching notification based on the pressed key and 
    let matchingindex = -1;

    for (let p = 0; p< this.config.names.length; p++){
	if (this.config.names[p]["press"] === key || this.config.names[p]["press"] === keyCode || this.config.names[p]["press"] === code) {
		matchingindex = p;
		break
	}
    }

    if (matchingindex > -1){
    if (this.toggleArray[matchingindex]==="Out"){
      this.toggleArray[matchingindex] = "In";
      this.table1 = this.createTable1();
      this.updateDom();
    }
    else{
      this.toggleArray[matchingindex] = "Out";
      this.table1 = this.createTable1();
      this.updateDom();
    }}
  },
  createTable1: function () {
        var MMMinOutDiv = document.createElement('div');
        MMMinOutDiv.classList.add('MMM-inOutBoard');
        var inOutHeader = document.createElement('div')
        inOutHeader.className = 'inoutH'
        inOutHeader.innerHTML = "In & Out Board"
        MMMinOutDiv.appendChild(inOutHeader)

        // Create table for data
        var table1 = document.createElement("table");
        var table1Header = document.createElement("thead");
        var table1Body = document.createElement("tbody");

        // Create header row for Name
        var table1HeaderRow = document.createElement("tr");
        const nameHead = document.createElement('th');
        nameHead.innerHTML = "Name";
        table1HeaderRow.appendChild(nameHead)
        // Create header row for Key
        const keyHead = document.createElement('th');
        keyHead.innerHTML = 'Key';
        table1HeaderRow.appendChild(keyHead)
        // Create header row for indication
        const whereHead = document.createElement('th');
        whereHead.innerHTML = 'In or Out';
        table1HeaderRow.appendChild(whereHead)
        
        // Append header row to table1 header
        table1Header.appendChild(table1HeaderRow);
        // Populate table1 body with data
        for (let z = 0; z < this.config.numberOfNames; z+=1) {
            var row = document.createElement("tr");
            const nameData = document.createElement("td");
            nameData.innerHTML = this.config.names[z].name;
            row.appendChild(nameData);

            const keyData = document.createElement('td');
            keyData.innerHTML = this.config.names[z].press;
            row.appendChild(keyData);
          
            const whereData = document.createElement('td');
            whereData.innerHTML = this.toggleArray[z];
	    if (this.toggleArray[z]=== "Out"){
		whereData.className = 'color-out';		
		}
	    else{
		whereData.className = 'color-in';
		}


            row.appendChild(whereData);
            table1Body.appendChild(row);
        };

        table1.appendChild(table1Header);
        table1.appendChild(table1Body);
        MMMinOutDiv.appendChild(table1)

        return MMMinOutDiv;
    },
})
