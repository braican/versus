import { Link } from 'preact-router/match';
import style from './style.scss';

const Header = () => (
	<header class={style.header}>
		<Link class={style.logo} href="/">Vs.</Link>
		<nav class={style.nav}>
			<Link class={style.profileLink} href="/profile">Me</Link>
		</nav>
	</header>
);

export default Header;
