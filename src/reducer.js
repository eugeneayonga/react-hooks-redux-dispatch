let state = { count: 0 };

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}


//  Rendering State
function render() {
  document.body.textContent = state.count;
}

// Persisting changes in our state
function dispatch(action) {
  state = changeState(state, action);
  render();
}






