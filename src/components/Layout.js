import Nav from './Nav';
export default function Layout({ children }) {
    return(<>
     <Nav />
     {children}
    </>);
}