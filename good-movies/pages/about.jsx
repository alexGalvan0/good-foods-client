import About from "../components/about/Home"
import useLocalStorage from '../hooks/useLocalStorage'
function AboutPage(){

    const [name, setName] = useLocalStorage("name", "Bob");
    return (
        <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    )
  }

export default AboutPage;
