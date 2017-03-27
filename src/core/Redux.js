import { createStore } from 'redux'


function compareCandidat(state = {candidate: [], category: 0}, action) {
  switch (action.type) {
  case 'ADD_CANDIDAT':
    if(state.candidate.length == 2){
        state.candidate.shift();      
        state.candidate.push(action.candidate);
    }
    else{
        state.candidate.push(action.candidate);      
    }
    return state;
  case 'SELECT_CATEGORY':
    return state - 1
  default:
    return state
  }
}

// On crée un Redux store, qui va garder l'état de notre app.
// L'api correspond à trois fonctions { subscribe, dispatch, getState }.
let store = createStore(compareCandidat)

// On peut s'abonner manuellement ou bien lier l'état à une vue automatique// ment à l'aide du binding. 
store.subscribe(() =>
  console.log(store.getState())
)

export default store;