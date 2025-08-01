export const App = () => (
	<main className="flex flex-col gap-3 h-dvh items-center justify-center *:max-w-lg *:min-w-0 *:w-full">
		<h1 className="font-sans font-semibold select-none text-3xl">
			♾️ infinity<sup className="font-normal ml-2 text-sm">
				a{" "}
				<a
					className="hover:cursor-pointer outline-0 text-blue-600 dark:text-blue-400 focus:underline hover:underline"
					href="https://hackclub.com"
					target="_blank"
				>
					hackclub
				</a>{" "}
				ysws :)
			</sup>
		</h1>
		<p>
			ship an app or game with a <strong>shared and realtime infinite canvas</strong> for...
		</p>
		<ul className="flex flex-col gap-2">
			<li>
				* five hours: an{" "}
				<a
					className="hover:cursor-pointer font-mono outline-0 text-blue-600 dark:text-blue-400 focus:underline hover:underline"
					href="https://amazon.com/dp/B078KZNX5L"
					rel="noopener noreferrer"
					target="_blank"
				>
					aluminum alloy <strong>infinity cube w/ case</strong>
				</a>{" "}
				<em>or</em> a{" "}
				<a
					className="hover:cursor-pointer font-mono outline-0 text-blue-600 dark:text-blue-400 focus:underline hover:underline"
					href="https://amazon.com/dp/B0CT3TJYX8"
					rel="noopener noreferrer"
					target="_blank"
				>
					magnetic uv-coated <strong>mirror speedcube</strong>
				</a>
			</li>
			<li>
				* ten hours: a{" "}
				<a
					className="hover:cursor-pointer font-mono outline-0 text-blue-600 dark:text-blue-400 focus:underline hover:underline"
					href="https://amazon.com/dp/B0DHLDGBQ5"
					rel="noopener noreferrer"
					target="_blank"
				>
					slim large-size <strong>touchpad</strong>
				</a>{" "}
				(to navigate your canvas!)
			</li>
			<li>
				* twenty hours: an{" "}
				<a
					className="hover:cursor-pointer font-mono outline-0 text-blue-600 dark:text-blue-400 focus:underline hover:underline"
					href="https://ploopy.co/shop/trackpad-full-kit"
					rel="noopener noreferrer"
					target="_blank"
				>
					open source, 3d-printed, DIY <strong>touchpad kit</strong>
				</a>{" "}
				(to navigate your canvas!)
			</li>
		</ul>
		<div className="flex gap-6 items-center">
			<a
				className="bg-black dark:bg-white hover:cursor-pointer font-mono focus:font-bold hover:font-bold outline-0 select-none text-white dark:text-black"
				href="https://submit.hackclub.com/infinity"
			>
				&gt; submit
			</a>
			<a
				className="hover:cursor-pointer font-mono outline-0 select-none focus:underline hover:underline"
				href="https://gumwall.vercel.app"
				target="_blank"
			>
				&gt; example
			</a>
			<a
				className="hover:cursor-pointer font-mono outline-0 select-none focus:underline hover:underline"
				href="https://hackclub.slack.com/archives/C098ARHLXFW"
				target="_blank"
			>
				&gt; slack
			</a>
		</div>
	</main>
);
