import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './components/layout/DefaultLayout.tsx';
import { NotFound } from './components/pages/NotFound.tsx';
import { Homepage } from './components/pages/Homepage.tsx';
import { DataProvider } from './contexts/data.context.tsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route
                        index
                        element={
                            <DataProvider>
                                <Homepage />
                            </DataProvider>
                        }
                    />

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
