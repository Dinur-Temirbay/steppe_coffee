import { Header } from './components/Header/Header';
import { Promo } from './components/Promo/Promo';
import { Bottles } from './components/Bottles/Bottles';
import { Marketing } from './components/Marketing/Marketing';
import { Activity } from './components/Marketing/Activity';
import { Bottle } from './components/Bottle/Bottle';

export function App() {
	return (
		<>
			<Header />
			<Promo />
			<Bottles />
			<Marketing />
			<Bottle />
			<Activity />
		</>
	);
}
