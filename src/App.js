import './App.css'
import LiveMarkdown from './components/LiveMarkdown'
import NavBar from './components/NavBar'
import { useTheme } from "./contexts/theme-context";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`${theme}-mode`}>
      <NavBar />
      <LiveMarkdown />
    </div>
  )
}
export default App