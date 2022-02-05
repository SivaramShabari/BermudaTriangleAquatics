import video from "../images/ccfish.mp4";
function Home() {
	return (
		<div className="scrollbar-hide">
			<section
				style={{ minHeight: window.innerHeight }}
				className="body-font scrollbar-hide"
			>
				<div>
					<video
						style={{
							position: "absolute",
							top: 0,
							opacity: 0.8,
							zIndex: -50,
							minHeight: window.innerHeight,
							maxHeight: window.innerHeight,
							width: window.innerWidth,
							objectFit: "cover",
						}}
						preload="none"
						autoPlay
						muted
						loop
					>
						<source src={video} type="video/mp4" />
					</video>
				</div>
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
							Welcome to Bermuds Triangle Aquatics
						</h1>
						<h3 className="title-font sm:text-2xl text-xl mb-4 font-small">
							Land of Exotic fishes and predators
						</h3>
						<p className="mb-8 leading-relaxed">
							Labore ea officia sit fugiat esse ea qui culpa. Ut eiusmod
							voluptate non magna quis incididunt do eiusmod. Occaecat irure
							reprehenderit minim sit incididunt cupidatat fugiat reprehenderit
							sit esse irure dolor deserunt. Ea sit nostrud reprehenderit sunt
							quis reprehenderit consectetur consequat non.
						</p>
						<div className="flex justify-center">
							<button className="btn btn-primary m-2">Contact</button>
							<button className="btn btn-accent text-black m-2">Explore</button>
						</div>
						<div className="mt-4">
							<span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
								<div className="-500">
									<svg
										fill="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
									</svg>
								</div>
								<div className="ml-3 -500">
									<svg
										fill="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
									</svg>
								</div>
								<div className="ml-3 -500">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<rect
											width="20"
											height="20"
											x="2"
											y="2"
											rx="5"
											ry="5"
										></rect>
										<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
									</svg>
								</div>
								<div className="ml-3 -500">
									<svg
										fill="currentColor"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="0"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path
											stroke="none"
											d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
										></path>
										<circle cx="4" cy="4" r="2" stroke="none"></circle>
									</svg>
								</div>
							</span>
						</div>
					</div>
					<div className="lg:max-w-lg ">
						<iframe
							width={
								window.innerWidth < 600 ? `${window.innerWidth * 0.95}` : "570"
							}
							height="345"
							src="https://www.youtube.com/embed/kC1K_q1tFp4"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						></iframe>
					</div>
				</div>
			</section>

			<section className="-700 body-font border-t border-primary-focus ">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1">
							COLLECTIONS
						</h2>
						<h1 className="sm:text-3xl text-2xl font-medium title-font -900">
							My Fish Collection
						</h1>
					</div>
					<div className="flex flex-wrap -m-4">
						<div className="w-full carousel">
							<div id="slide1" className="relative w-full pt-20 carousel-item">
								<img
									src="https://www.thesprucepets.com/thmb/ogpjgm6PgjX0ukeCun6E2OE8zaY=/2326x1288/filters:fill(auto,1)/GettyImages-1171092661-7813725c40f9443f970ed85d78b8830e.jpg"
									className="w-full"
								/>
								<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
									<div className="btn btn-circle">❮</div>
									<div className="btn btn-circle">❯</div>
								</div>
							</div>
							<div id="slide2" className="relative w-full pt-20 carousel-item">
								<img
									src="https://picsum.photos/id/501/800/300"
									className="w-full"
								/>
								<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
									<div className="btn btn-circle">❮</div>
									<div className="btn btn-circle">❯</div>
								</div>
							</div>
							<div id="slide3" className="relative w-full pt-20 carousel-item">
								<img
									src="https://picsum.photos/id/502/800/300"
									className="w-full"
								/>
								<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
									<div className="btn btn-circle">❮</div>
									<div className="btn btn-circle">❯</div>
								</div>
							</div>
							<div id="slide4" className="relative w-full pt-20 carousel-item">
								<img
									src="https://picsum.photos/id/503/800/300"
									className="w-full"
								/>
								<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
									<div className="btn btn-circle">❮</div>
									<div className="btn btn-circle">❯</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="-700 body-font border-t border-primary-focus">
				<div className="container px-5 py-24 mx-auto flex flex-wrap">
					<div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
						<img
							alt="feature"
							className="object-cover object-center h-full w-full"
							src="https://www.worldatlas.com/r/w1200/upload/04/ab/d1/fish-species-tropical.jpg"
						/>
					</div>
					<div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
						<div className="flex flex-col mb-10 lg:items-start items-center">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-100 text-primary mb-5">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-6 h-6"
									viewBox="0 0 24 24"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="-900 text-lg title-font font-medium mb-3">
									Fish 1
								</h2>
								<p className="leading-relaxed text-base">
									Fish descsoijkfhl sdljh dskjfh sdkjhfsdkjfh sdkjfhs dkfj .
								</p>
								<div className="mt-3 text-primary inline-flex items-center">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</div>
							</div>
						</div>
						<div className="flex flex-col mb-10 lg:items-start items-center">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-100 text-primary mb-5">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-6 h-6"
									viewBox="0 0 24 24"
								>
									<circle cx="6" cy="6" r="3"></circle>
									<circle cx="6" cy="18" r="3"></circle>
									<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="-900 text-lg title-font font-medium mb-3">
									Fish 2
								</h2>
								<p className="leading-relaxed text-base">
									Qui Lorem amet labore elit mollit.
								</p>
								<div className="mt-3 text-primary inline-flex items-center">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</div>
							</div>
						</div>
						<div className="flex flex-col mb-10 lg:items-start items-center">
							<div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-100 text-primary mb-5">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-6 h-6"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</div>
							<div className="flex-grow">
								<h2 className="-900 text-lg title-font font-medium mb-3">
									Red Tail Fish
								</h2>
								<p className="leading-relaxed text-base">
									Adipisicing cupidatat sunt aliqua nisi commodo.
								</p>
								<div className="mt-3 text-primary inline-flex items-center">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="-700 body-font border-t border-primary-focus">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
						<p className="lg:w-1/2 w-full leading-relaxed text-base">
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify, subway tile poke farm-to-table.
						</p>
					</div>
					<div className="flex flex-wrap -m-4">
						<div className=" xl:w-1/3 md:w-1/2 p-4">
							<div className="border glass border-gray-300 p-3 rounded-lg">
								<img
									className="w-full h-auto rounded-lg object-cover object-center"
									src="https://files.worldwildlife.org/wwfcmsprod/images/Buffalo_fish/story_full_width/80b2nhfpi6_Buffalo_fish__c__Freshwaters_Illustrated.jpg"
								/>
								<h2 className="text-lg -900 font-medium title-font mb-2">
									Shooting Stars
								</h2>
								<p className="leading-relaxed text-base">
									Fingerstache flexitarian street art 8-bit waist co, subway
									tile poke farm.
								</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border glass border-gray-300 p-6 rounded-lg">
								<img
									className="w-full h-auto rounded-lg object-cover object-center"
									src="https://files.worldwildlife.org/wwfcmsprod/images/Buffalo_fish/story_full_width/80b2nhfpi6_Buffalo_fish__c__Freshwaters_Illustrated.jpg"
								/>
								<h2 className="text-lg -900 font-medium title-font mb-2">
									The Catalyzer
								</h2>
								<p className="leading-relaxed text-base">
									Fingerstache flexitarian street art 8-bit waist co, subway
									tile poke farm.
								</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border glass border-gray-300 p-6 rounded-lg">
								<img
									className="w-full h-auto rounded-lg object-cover object-center"
									src="https://files.worldwildlife.org/wwfcmsprod/images/Buffalo_fish/story_full_width/80b2nhfpi6_Buffalo_fish__c__Freshwaters_Illustrated.jpg"
								/>
								<h2 className="text-lg -900 font-medium title-font mb-2">
									Neptune
								</h2>
								<p className="leading-relaxed text-base">
									Fingerstache flexitarian street art 8-bit waist co, subway
									tile poke farm.
								</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border glass border-gray-300 p-6 rounded-lg">
								<img
									className="w-full h-auto rounded-lg object-cover object-center"
									src="https://files.worldwildlife.org/wwfcmsprod/images/Buffalo_fish/story_full_width/80b2nhfpi6_Buffalo_fish__c__Freshwaters_Illustrated.jpg"
								/>
								<h2 className="text-lg -900 font-medium title-font mb-2">
									Melanchole
								</h2>
								<p className="leading-relaxed text-base">
									Fingerstache flexitarian street art 8-bit waist co, subway
									tile poke farm.
								</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border glass border-gray-300 p-6 rounded-lg">
								<img
									className="w-full h-auto rounded-lg object-cover object-center"
									src="https://files.worldwildlife.org/wwfcmsprod/images/Buffalo_fish/story_full_width/80b2nhfpi6_Buffalo_fish__c__Freshwaters_Illustrated.jpg"
								/>
								<h2 className="text-lg -900 font-medium title-font mb-2">
									Bunker
								</h2>
								<p className="leading-relaxed text-base">
									Fingerstache flexitarian street art 8-bit waist co, subway
									tile poke farm.
								</p>
							</div>
						</div>
						<div className="xl:w-1/3 md:w-1/2 p-4">
							<div className="border glass border-gray-300 p-6 rounded-lg">
								<img
									className="w-full h-auto rounded-lg object-cover object-center"
									src="https://files.worldwildlife.org/wwfcmsprod/images/Buffalo_fish/story_full_width/80b2nhfpi6_Buffalo_fish__c__Freshwaters_Illustrated.jpg"
								/>
								<h2 className="text-lg -900 font-medium title-font mb-2">
									Ramona Falls
								</h2>
								<p className="leading-relaxed text-base">
									Fingerstache flexitarian street art 8-bit waist co, subway
									tile poke farm.
								</p>
							</div>
						</div>
					</div>
					<button className="flex mx-auto mt-16 text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-primary-focus rounded text-lg">
						Buy
					</button>
				</div>
			</section>

			<section>
				<div className="text-black px-5 py-12">
					<div className="w-1/3  bg-white rounded-lg p-8 mx-auto flex flex-col  mt-10 md:mt-0 relative z-10">
						<h2 className="text-lg mb-1 font-medium title-font">Feedback</h2>
						<p className="leading-relaxed mb-5 -600">
							Your Feedback would help me make our fish journey better!
						</p>
						<textarea
							className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-primary text-base px-4 py-2 mb-4 resize-none"
							placeholder="Message"
						></textarea>
						<button className="btn btn-primary">Submit Feedback</button>
						<p className="text-xs mt-3"></p>
					</div>
				</div>
			</section>
			<footer className="align-center">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
						<div className="lg:w-1/6 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium  tracking-widest text-sm mb-3">
								CATEGORIES
							</h2>
							<nav className="list-none mb-10">
								<li>
									<div className="-600 hover:-800">First Link</div>
								</li>
								<li>
									<div className="-600 hover:-800">Second Link</div>
								</li>
								<li>
									<div className="-600 hover:-800">Third Link</div>
								</li>
								<li>
									<div className="-600 hover:-800">Fourth Link</div>
								</li>
							</nav>
						</div>
						<div className="lg:w-1/6 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium -900 tracking-widest text-sm mb-3">
								CATEGORIES
							</h2>
							<nav className="list-none mb-10">
								<li>
									<div className="-600 hover:-800">First Link</div>
								</li>
								<li>
									<div className="-600 hover:-800">Second Link</div>
								</li>
								<li>
									<div className="-600 hover:-800">Third Link</div>
								</li>
								<li>
									<div className="-600 hover:-800">Fourth Link</div>
								</li>
							</nav>
						</div>
						<div className="lg:w-1/6 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium -900 tracking-widest text-sm mb-3">
								CATEGORIES
							</h2>
							<nav className="list-none mb-10">
								<li>
									<div className="-600 hover:-800">First Link</div>
								</li>
								<li>
									<div className="-600 hover:-800">Second Link</div>
								</li>
								<li>
									<div className="-600 hover:-800">Third Link</div>
								</li>
								<li>
									<div className="-600 hover:-800">Fourth Link</div>
								</li>
							</nav>
						</div>
						<div className="lg:w-1/6 md:w-1/2 w-full px-4">
							<h2 className="title-font font-medium -900 tracking-widest text-sm mb-3">
								CATEGORIES
							</h2>
							<nav className="list-none mb-10">
								<li>
									<div className="-600 hover:-800">First Link</div>
								</li>
								<li>
									<div className="-600 hover:-800">Second Link</div>
								</li>
								<li>
									<div className="-600 hover:-800">Third Link</div>
								</li>
								<li>
									<div className="-600 hover:-800">Fourth Link</div>
								</li>
							</nav>
						</div>
					</div>
				</div>
				<div className="border-t border-primary-focus">
					<div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
						<div className="flex md:flex-no-wrap flex-wrap justify-center md:justify-start"></div>
						<span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
							<div className="-500">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</div>
							<div className="ml-3 -500">
								<svg
									fill="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</div>
							<div className="ml-3 -500">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
							</div>
							<div className="ml-3 -500">
								<svg
									fill="currentColor"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="0"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path
										stroke="none"
										d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
									></path>
									<circle cx="4" cy="4" r="2" stroke="none"></circle>
								</svg>
							</div>
						</span>
					</div>
				</div>
				<div className="border-t-1 border-primarr">
					<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
						<p className=" text-sm text-center sm:text-left">
							Developed by SS
							<div className="-600 ml-1"></div>
						</p>
						<span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center -500 text-sm"></span>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Home;
