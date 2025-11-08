import './App.css'
import { Header } from './Header/Header-section-component.jsx'
import { Hero } from './Hero/Hero-section-component.jsx'
import { Skills } from './Skills/Skills-section-component.jsx'
import { Projects } from './Projects/Projects-section-component.jsx'
import { Experience } from './Experience/Experience-section-component.jsx'

export default function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
    </>
  )
}
