const stringSorter = {
  state: {
    active: 'evens',
    evens: ['2', '4'],
    odds: ['1', '3'],
    nany: ['x', 'y'],
  },
  setActive: function (newActive) {
    // set the new active array
    this.state.active = newActive;
  },
  addString: function (newString) {
    debugger;
    // add the new string to the correct array
    //check first if even , odd or nany 
    const num = Number(parseInt(newString));
    var numbers = /^[0-9]+$/;
    if (!newString.match(numbers)) {
      //it is not a number
      this.state.active = 'nany';
      this.state.nany.push(newString);

    }
    else if (num % 2 == 0) //even 
    {
      this.state.active = 'evens';
      this.state.evens.push(newString);
    }
    else {
      this.state.active = 'odds';
      this.state.odds.push(newString);
    }

  },
  renderActiveList: function () {
    // return the active array rendered to a list
    debugger;
    ulE = document.createElement("ul");
    if (this.state.active === 'nany') {

      var i;
      for (i = 0; i < this.nany.length; i++) {
        const li_1 = document.createElement('li');
        li_1.innerText = this.nany[i];
        ulE.appendChild(li_1);
      }

    }
    else if (this.state.active === 'evens') {
      for (i = 0; i < this.nany.length; i++) {
        const li_1 = document.createElement('li');
        li_1.innerText = this.evens[i];
        ulE.appendChild(li_1);
      }
    }
    else {
      //display odds 
      for (i = 0; i < this.odds.length; i++) {
        const li_1 = document.createElement('li');
        li_1.innerText = this.evens[i];
        ulE.appendChild(li_1);
      }

    }

    return ulE;
  }
}
