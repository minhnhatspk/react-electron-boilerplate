import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.window.require = require;

configure({ adapter: new Adapter() });
