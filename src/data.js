import bunny  from './assets/bugs_bunny.jpeg';
import gargamel from './assets/gargamel.jpeg';
import kızlar from './assets/kızlar.jpg';
import panter from './assets/pembe.jpeg';


export const Cartoon_Network= [
    {
      image: bunny,
      title: 'Bugs Bunny',
      description:
        'Bugs Bunny is a clever and mischievous rabbit created by Warner Bros. ',
    },
    {
      image: gargamel,
      title: 'Şirinler',
      description:
        'The Smurfs are small, blue, magical creatures living in a peaceful village in the forest. ',
    },
    {
      image: kızlar,
      title: 'Powerpuff Girls',
      description:
        'The Powerpuff Girls are three superhero sisters—Blossom, Bubbles, and Buttercup—created by Professor Utonium. ',
    },
    {
      image: panter,
      title: ' Pink Panther',
      description:
        'Pink Panther is a silent, smooth, and witty character known for his humorous adventures. ',
    },
  ];
  
  
  
  export const EXAMPLES = {
    components: {
      title: 'Components',
      description:
        'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
      code: `
  function Welcome() {
    return <h1>Hello, World!</h1>;
  }`,
    },
    jsx: {
      title: 'JSX',
      description:
        'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
      code: `
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>`,
    },
    props: {
      title: 'Props',
      description:
        'Components accept arbitrary inputs called props. They are like function arguments.',
      code: `
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`,
    },
    state: {
      title: 'State',
      description:
        'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
      code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Show Details</button>
        {isVisible && <p>Amazing details!</p>}
      </div>
    );
  }`,
    },
  };