import {useState , useEffect} from "react"
import './App.css'
import { ThemeContextProvider } from './contexts/theme'
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"

function App() {

  const [themeMode , setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in ui theme
  useEffect(() => {
    let theme = document.querySelector("html")
    theme.classList.remove("light" , "dark")
    theme.classList.add(themeMode)
  },[themeMode])
  
  return (
    <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
