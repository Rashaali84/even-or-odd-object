window.onload = () => {
    // debugger;
    let divEl = document.getElementById('selected');
    divEl.innerText = stringSorter.state.active;

    let ulEl = document.createElement('UL');

    for (let item of stringSorter.state[stringSorter.state.active]) {
        let liEl = document.createElement('LI');
        liEl.innerText = item;

        ulEl.appendChild(liEl);
    }
    divEl.appendChild(ulEl);

    // log initial state
    log.push({
        process: 'initialization',
    })
    // console.log('initialization done')
    return true;
}
