import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import CreateAluno from './pages/CreateAluno';
import EditAluno from './pages/EditAluno';
import RemoveAluno from './pages/RemoveAluno';
import ListarAlunos from './pages/ListarAlunos';

const App = () => {
    return (
        <div>
            <TopBar />
            <div className="content" aria-label="Conteúdo Principal">
                <Routes>
                    <Route path="/create" element={<CreateAluno />} />
                    <Route path="/edit/:id" element={<EditAluno />} /> 
                    <Route path="/remove" element={<RemoveAluno />} />
                    <Route path="/list" element={<ListarAlunos />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;