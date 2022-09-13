import Input from "./components/Input/input";

function App() {
  return (
    <div className="App">
      <h1>Busca CEP</h1>
      <Input 
        label={'CEP'}
        name={'zip'}
        type={'text'}
        placeholder={'00000-000'}
      />
    </div>
  );
}

export default App;
