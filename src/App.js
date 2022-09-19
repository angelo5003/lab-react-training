import './App.css';
import BoxColors from './components/BoxColors/BoxColors';
import CreditCard from './components/Creditcard/CreditCard';
import Greetings from './components/Greetings/Greetings';
import IdCard from './components/Idcard/IdCard';
import Random from './components/Random/Random';
import masterCardLogo from './assets/images/master-card.png';
import visaLogo from './assets/images/visa.png';

const idArray = [
  {
    user: {
      firstname: 'John',
      lastname: 'Doe',
      gender: 'male',
      height: '178',
      birth: '1992-07-14',
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
  },
  {
    user: {
      firstname: 'Delores',
      lastname: 'Obrien',
      gender: 'female',
      height: '172',
      birth: '1988-05-11',
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
];

const creditCardArray = [
  {
    card: {
      id: 1,
      type: 'Visa',
      // number: '0123456789018845',
      number: '•••• •••• •••• 8845',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'BNP',
      owner: 'Maxence Bouret',
      bgColor: '#11aa99',
      color: '#fff',
      logo: `${visaLogo}`,
    },
  },
  {
    card: {
      id: 2,
      type: 'Master Card',
      // number: '0123456789010995',
      number: '•••• •••• •••• 0995',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'N26',
      owner: 'Maxence Bouret',
      bgColor: '#eeeeee',
      color: '#222222',
      logo: `${masterCardLogo}`,
    },
  },
  {
    card: {
      id: 3,
      type: 'Visa',
      number: '•••• •••• •••• 6984',
      // number: '0123456789016984',
      expirationMonth: 12,
      expirationYear: 2019,
      bank: 'Name of the bank',
      owner: 'Firstname Lastname',
      bgColor: '#ddbb55',
      color: '#fff',
      logo: `${visaLogo}`,
    },
  },
];

function App() {
  return (
    <div className="App">
      <IdCard idCard={idArray[0]} />
      <IdCard idCard={idArray[1]} />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColors r={255} g={0} b={0} />
      <BoxColors r={128} g={255} b={0} />
      {creditCardArray.map((newCard) => {
        return <CreditCard key={newCard.card.id} newCard={newCard} />;
      })}
    </div>
  );
}

export default App;
