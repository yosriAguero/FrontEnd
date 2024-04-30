import componentImg from './assets/components.png'
import { CORE_CONCEPTS } from './data';
import DetailCore from "./DetailCore";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <DetailCore title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
          <DetailCore title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
          <DetailCore title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
        </ul>
        </section>
      
      </main>
    </div>
  );
}

export default App;
