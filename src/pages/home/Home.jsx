
import { Link } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import allBeers from "../../assets/img/allBeers.jpg"
import randomBeer from "../../assets/img/random.png"



const Home = () => {
    return (<>

        <header>
            <NavBar />
        </header>

        <main className="bg-white">

            {/* all beers container */}
            <div className="mx-auto max-w-7xl py-8 sm:px-6 sm:py-8 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            See our colections of beers
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum possimus architecto veritatis assumenda. Minima eveniet molestiae numquam nobis aperiam fuga iure, repellendus consequuntur, ducimus, quisquam voluptas corrupti? Accusamus, at?
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link to="/products"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                All beers
                            </Link>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img
                            className="absolute left-0 top-0 w-[40rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                            src={allBeers}
                            alt="allBeers"
                            width={1024}
                            height={1024}
                        />
                    </div>
                </div>
            </div>
            {/* random beercontainer */}
            <div className="mx-auto max-w-7xl py-8 sm:px-6 sm:py-8 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            List a random Beer
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum possimus architecto veritatis assumenda. Minima eveniet molestiae numquam nobis aperiam fuga iure, repellendus consequuntur, ducimus, quisquam voluptas corrupti? Accusamus, at?
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <Link to="/random"
                                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Random beer
                            </Link>
                        </div>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img
                            className="absolute left-0 top-0 w-[40rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                            src={randomBeer}
                            alt="random Beer"
                            width={1024}
                            height={1024}
                        />
                    </div>
                </div>
            </div>
        </main>


    </>);
}

export default Home;