import "./homepage.css"

const Home = () => {
    return(
        <div className="card" >
            <img src="newcat.png" alt="none" className="logo" />
            <header>This is Header</header>
            <main><h2>This is Main Line</h2></main>
            <footer>This is footer line</footer>
        </div>
    );
};

export default Home