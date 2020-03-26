function saveHandler() {
    debugger;

    // call app method to update state
    const inValue = document.getElementById('input');
    stringSorter.addString(inValue.value);

    // update DOM from state , call renderActiveList()
    const divEl = document.getElementById('selected');
    divEl.appendChild(stringSorter.renderActiveList());

    // log interaction
    log.push({
        interaction: 'increment  & display list '
    });
}

document.getElementById("save-button").addEventListener("click", saveHandler);
