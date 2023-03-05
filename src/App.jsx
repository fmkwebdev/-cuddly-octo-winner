import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import './App.css'

function App() {
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState("")
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key
  })

  const opanai = new OpenAIApi(configuration);
 
  const generateImage = async () => {
    const res = await opanai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512"
    })

    setResult(res.data.data[0].url)
  }

  return (
      <div className="App">
        <h2>Open AI Image Generator</h2>
        <textarea
          placeholder="Írj..."
          onChange={(e) => setPrompt(e.target.value)}
        />
        <br />
        <button onClick={generateImage}>Generate</button>
        <hr />
        {result.length > 0 ? (
          <img src={result} alt={result} />
        ) : (
          <p> Írj be valamit ! </p>
        )}
     </div>
        )
}

export default App
