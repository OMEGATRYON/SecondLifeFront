import { useGlobalState } from "../context/GlobalState";

function NavBar() {
  const [ state, dispatch ] = useGlobalState();
  return <h1>{state.currentUser}</h1>
}