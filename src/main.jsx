import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import EffectHook from './components/EffectHook'
import ExampleSetState from './components/ExampleSetState'
import EffectHookCount from './components/EffectHookCount'
import EffectHookApi from './components/EffectHookApi'
import EffectHookColour from './components/EffectHookColour'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <EffectHook /> */}
    <ExampleSetState />
    {/* <EffectHookCount /> */}
    {/* <EffectHookApi /> */}
    {/* <EffectHookColour /> */}
  </React.StrictMode>,
)
