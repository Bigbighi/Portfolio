import Main from './components/Main/main'
import Section from './components/section/section'
import Projects from './components/Projects/projects'

export default function app() {

  return(
    <>
      <Main/>
      <Section/>
      <Projects/>
      <button className='bg-blue-500 hover:bg-blue-400 py-1 px-3 rounded-lg fixed bottom-5 left-5'>
        <a href="#principal">topo</a>
      </button>
    </>
  )
}
