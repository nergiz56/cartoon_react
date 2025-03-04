import CartoonImg from '../../assets/cartoon.webp';
import '../../index.css';

export default function Header(){

    return(
       <header>
        <img src={CartoonImg}  alt="Cartoon Network"/>
        <h1>CarrToon Network</h1>
        <p>Cartoon Network is a popular television channel founded in 1992, broadcasting animated series for children. 🚀</p>
       </header>
    );
}