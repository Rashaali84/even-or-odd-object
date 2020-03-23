const stringSorter = {
  state: {
    active: 'evens',
    evens: ['2', '4'],
    odds: ['1', '3'],
    nany: ['x', 'y'],
  },
  setActive: function (newActive) {
    // set the new active array
    stringSorter.state.active = this.value; // === newActive.target.value
    stringSorter.renderActiveList();
  },
  addString: function (newString) {
    // add the new string to the correct array
  },
  renderActiveList: function () {
    // return the active array rendered to a list
    let divEl = document.getElementById('selected');
    // debugger;
    divEl.innerText = this.state.active;

    let ulEl = document.createElement('UL');

    for (let item of this.state[this.state.active]){
      let liEl = document.createElement('LI');
      liEl.innerText = item;

      ulEl.appendChild(liEl);
    }
    divEl.appendChild(ulEl);
  }
}
