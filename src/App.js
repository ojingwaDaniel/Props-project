import './App.css';
import Contact from './contact';
import contact1 from './images/contact-1.jpg'
import contact2 from './images/contact -2.jpg'
import contact3 from './images/contact-3.jpg'
import contact4 from './images/contact-4.jpg'
import contact5 from './images/contact-5.jpg'

function App() {
  // const date = new Date()
  // const hour = date.getHours
  // console.log(hour)
  // let timeOfDay
  // if (hour < 12) {
  //   timeOfDay = 'morning'
  // } else if (hour >= 12 && hour < 17) {
  //   timeOfDay = 'Afternoon'
  // }else {
  //   timeOfDay = 'Night'
  // }
  return (
    <div className="App">
      <Contact
        img={contact1}
        name="Mr Broda Shaggi"
        number="08101338296"
        email="brodashaggi@gmail.com"
      />
      <Contact
        img={contact2}
        name=" Mr Brain Jotter"
        number="08109338267"
        email="brainjotter@gmail.com"
      />
      <Contact
        img={contact3}
        name="Mr Sydney Talker"
        number="08101438389"
        email="sydneytalker@gmail.com"
      />
      <Contact
        img={contact4}
        name="Mrs Taooma"
        number="08101938254"
        email="taooma@gmail.com"
      />
      <Contact
        img={contact5}
        name="Mr Nasboi"
        number="08101738239"
        email="nasboi@gmail.com"
      />
    </div>
  );
}

export default App;
