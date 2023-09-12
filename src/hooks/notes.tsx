import {createContext, useContext, useState} from 'react';
import {api} from '../services/api';

    interface Tag {
    id: string;
    name: string;
    }
    


interface NotesContextValue {
  fetchNotes: (title?: string, rating?: string, tagsSelected?: Tag[]) => Promise<any>;
  notes: any[]; 
  setNotes: React.Dispatch<React.SetStateAction<any[]>>; 
}

export const NotesContext = createContext<NotesContextValue>({
  fetchNotes: async () => {},
   notes: [], 
  setNotes: () => {}, 
});


interface NoteProviderProps {
    children: React.ReactNode;
}


    function NotesProvider({ children}: NoteProviderProps){
            const [notes, setNotes] = useState<string[]>([]);

        async function fetchNotes(title?: string, rating?: string, tagsSelected?: Tag[]): Promise<any> {
        try{
            let endpoint = `/notes?user_id&title=${title || ''}&rating=${rating || ''}&tags=${tagsSelected || ''}`;
            const response = await api.get(endpoint);
            setNotes(response.data);

            }catch(error:any) {
                 return alert("It's not possible to fetch the data");
            }

    }

    
         return (
        <NotesContext.Provider value={{ fetchNotes, notes, setNotes }}>
            {children}
        </NotesContext.Provider>
    )
}

    function useNotes(){
        const context = useContext(NotesContext);
        return context;
    }

    export {NotesProvider, useNotes};
