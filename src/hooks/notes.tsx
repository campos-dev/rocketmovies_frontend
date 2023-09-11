import {createContext, useContext} from 'react';
import {api} from '../services/api';


interface NotesContextValue {
  fetchNotes: () => Promise<any>;
}

export const NotesContext = createContext<NotesContextValue>({
  fetchNotes: async () => {},
});



interface NoteProviderProps {
    children: React.ReactNode;
}

    function NotesProvider({ children}: NoteProviderProps){

        async function fetchNotes(): Promise<any> {
            try{
                const response = await api.get(`/notes?user_id&title&rating&tags`);
                return response.data
            }catch(error:any) {
                 return alert("It's not possible to fetch the data");
            }

    }


        return(
            <NotesContext.Provider value={{fetchNotes}}>
                {children}
            </NotesContext.Provider>
        )
    }

    function useNotes(){
        const context = useContext(NotesContext);
        return context;
    }

    export {NotesProvider, useNotes};
