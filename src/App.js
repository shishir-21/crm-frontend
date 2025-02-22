import logo from './logo.svg';
import './App.css';

import { Entry } from './page/entry/Entry.page';
import { DefaultLayout } from './layout/DefaultLayout';
function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        send page component 
      </DefaultLayout>
    </div>
  );
}

export default App;
