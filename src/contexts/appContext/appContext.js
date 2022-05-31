import { createContext, useReducer } from "react";
import { hackathons } from "../../pages/HackathonPage/data/data";
import { projects } from "../../pages/ProjectPage/data/data";
import appReducer from "./appReducer";

export const AppContext = createContext();

export function AppContextProvider({children}) {
    const [value, dispatch] = useReducer(appReducer, {
        isDrawerOpen: false,
        isLoading: false,
        isError: false,
        isLogin: false,
        userInfo: {},
        hackathons: hackathons,
        projects: projects,
        projectDetail: {},
        filteredProjects: projects,
        projectKeyword: '',
        selectedCategory: '',
    })

    const ContextProvider = AppContext.Provider;

    return (
        <ContextProvider
            value={{
                appContext: value,
                dispatch,
            }}
        >
            {children}
        </ContextProvider>
    )
}

export function connectAppContext(Component) {
    const ContextConsumer = AppContext.Consumer;
  
    return ({ ...props }) => <ContextConsumer>{(value) => <Component {...props} {...value} />}</ContextConsumer>;
  }
  