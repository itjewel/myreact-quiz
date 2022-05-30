import Nav from './Nav';
export default function Layout({ children }) {
    return (<>
        <Nav />
        <main className="main">
            <div className="container">
                {children}
            </div>
        </main>
    </>);
}