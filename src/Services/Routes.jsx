import About from '../Components/About';
import Home from '../Components/Home';
import Skills from '../Components/Skills';
import Portfolio from '../Components/Portfolio';
import Interests from '../Components/Interests';
import Contact from '../Components/Contact';
import casa from '../Svg/casa.svg';
import informacoes from '../Svg/informacoes.svg';
import lampada from '../Svg/lampada.svg';
import pasta from '../Svg/pasta.svg';
import dardo from '../Svg/dardo.svg';
import agenda from '../Svg/agenda.svg';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: '<Home />',
    icon: casa,
  },
  {
    path: '/about',
    exact: true,
    component: About,
    name: '<About_me />',
    icon: informacoes,
  },
  {
    path: '/skills',
    exact: true,
    component: Skills,
    name: '<Skills />',
    icon: lampada,
  },
  {
    path: '/portfolio',
    exact: true,
    component: Portfolio,
    name: '<Portfolio />',
    icon: pasta,
  },
  {
    path: '/interests',
    exact: true,
    component: Interests,
    name: '<Interests />',
    icon: dardo,
  },
  {
    path: '/contact',
    exact: true,
    component: Contact,
    name: '<Contact />',
    icon: agenda,
  },
];