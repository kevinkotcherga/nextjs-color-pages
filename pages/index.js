import Head from 'next/head';
import Link from 'next/link';

import colors from '../data/colors.json';
import styles from './color.module.css'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Colors!</title>
				<meta
					name="description"
					content="App that displays pretty colors to learn Next!"
				/>
			</Head>

			{colors.map(color => (
				<Link passHref key={color.id} href={`/${color.name}`}>
					<h2 className={styles.title}>{color.name}</h2>
				</Link>
			))}
		</div>
	);
}
