import componentImg from './assets/components.png'
import { CORE_CONCEPTS } from './data';
import DetailCore from "./component_jsx/DetailCore";
import Header from "./component_jsx/Header";
import TabButton from './component_jsx/TabButton';

function App() {
  var selected = "";
  function handleSelect(args)
  {
    alert(args);
    selected = args;
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <DetailCore {...CORE_CONCEPTS[0]}/>
          <DetailCore {...CORE_CONCEPTS[1]}/>
          <DetailCore {...CORE_CONCEPTS[2]}/>
        </ul>
        </section>    
      </main>
     <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
        <TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
        <TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
        <TabButton onSelect={()=>handleSelect('State')}>State</TabButton>
      </menu>
     {selected}
     </section>

    </div>
  );
}

export default App;
