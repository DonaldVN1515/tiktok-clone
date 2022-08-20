import config from '~/config';
// Layouts
import { HeaderLayout } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public Routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.follwing, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderLayout },
  { path: config.routes.search, component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
