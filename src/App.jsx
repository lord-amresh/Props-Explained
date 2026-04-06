import './App.css'

import BasicProps from './components/BasicProps.jsx'
import RefProps from './components/RefProps.jsx'
import ChildrenProps from './components/ChildrenProps.jsx'
import Complexprops from './components/Complexprops.jsx'
import ThemeToggler, {Themeprovider} from './components/ThemeToggler.jsx'

function Navigation () {
  const isdark = true

  const sections = [
    {id: 'basic', label: 'Basic Props', icon: '📦'},
    {id: 'ref', label: 'Ref Props', icon: '🔗'},
    {id: 'children', label: 'Children Props', icon: '👶'},
    {id: 'complex', label: 'Complex Props', icon: '🧩'},
    {id: 'theme', label: 'Theme Toggler', icon: '🎨'}
  ]

  return (
    <nav className={`sticky top-0 z-50 shadow-md
    transition-colors ${
      isdark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex flex-wrap gap-2 justify-center'>
          {sections.map((section) => (
            <button
              key={section.id} className={`px-4 py-2 rounded-lg font-medium bg-blue-600 text-white mr-2 mt-2 hover:bg-sky-800`}
            >
                <span className='mr-2'>{section.icon}</span>
                {section.label}
              </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

function AppContent () {
  const isDark = true;
  return(
  <div className={`min-h-screen bg-gray-800`}>
    <Navigation/>
    <div className='container mx-auto px-4 py-8'>
      <header
        className={`text-center mb-12 trasition-colors ${
        isDark ? 'text-white' : 'text-gray-800'
        }`}
      >
        <h1 className='text-5xl font-bold mb-4'>React Props explained</h1>
        <p className='text-lg text-gray-300 mb-8'>A comprehensive guide to understanding props in React.</p>
      </header>
      <div className='space-y-8'>
        <div id="basic" className='scroll-mt-200'>
          <BasicProps />
        </div>
        <div id="basic" className='scroll-mt-200'>
          <ChildrenProps />
        </div>
        <div id="basic" className='scroll-mt-200'>
          <Complexprops />
        </div>
        <div id="basic" className='scroll-mt-200'>
          <RefProps />
        </div>
        <div id="basic" className='scroll-mt-200'>
          <ThemeToggler />
        </div>
      </div>
      <footer
        className={`text-center mt-12 pb-8 transition-colors ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        <p className='text-sm'> Made with ❤️ using Npm, Vite, React and Tailwind CSS
        </p>
      </footer>
    </div>
    </div>
    );
}

function App() {
  return (
    <Themeprovider>
      <AppContent />
    </Themeprovider>
   );
}

export default App
