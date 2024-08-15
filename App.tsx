import { NavigationContainer } from "@react-navigation/native";
import { Routes } from './src/routes'

/**
 * npm install @react-navigation/native
 * 
 * recurso usado para criar rotas de navegação 
 * recurso complementar do arquivo routes onde desenhamos as rotas
 */
export default function App() {
  return (
    <NavigationContainer>
       <Routes/>
    </NavigationContainer>
  )
}