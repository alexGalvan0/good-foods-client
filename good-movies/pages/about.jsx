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
        <button onClick={notification}>Notification</button>
      </div>
    )
  }

export default AboutPage;
