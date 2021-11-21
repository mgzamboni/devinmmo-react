import { GameDetails } from "../pages/GameDetails";
import { GameList } from "../pages/GameList";
import { Home } from "../pages/Home";
import { NewsList } from "../pages/NewsList";
import { NotFound } from "../pages/NotFound";


export const routes = [
    { path: "/", exact: false, element: Home },
    { path: "/games", exact: false, element: GameList },
    { path: "/news", exact: false, element: NewsList },
    { path: "/games/:id", exact: false, element: GameDetails },
    { path: "*", exact: false, element: NotFound },
  ];

//   <Route path="/" element={<Home />} />
//   <Route path="/games" element={<GameList />} />
//   <Route path="/news" element={<NewsList />} />
//   <Route path="/games/:id" element={<GameDetails />} />
//   <Route path="*" element={<NotFound />} />
