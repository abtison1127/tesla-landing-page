import './App.css';
import Header from './components/Header';
import Item from './components/Item.js';
import FirstItem from './components/FirstItem.js';


import Accessories from './assets/Desktop-Accessories.jpg'
import MusicParty from './assets/musicParty.png'
import ExpenseTracker from './assets/expenseTracker.jpg'
import Pathfinder from './assets/pathfinder.jpg'
import Tesla from './assets/tesla.jpg'
import topPage from './assets/topPage.jpg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className="App">
      <Header/>
        <div className="app__itemsContainer">
          <FirstItem
            title='REACT DEVELOPER'
            desc='A passionate software engineer excited about learning new technologies and deploying ever-improving applications. Experience in Object-oriented programming and Front-end Development.'
            descLink=''
            backgroundImg={topPage}
          />
          <Item
            title='Music Party'
            desc='A full-stack web app that lets users listen and control music with each other simultaneously with Spotify API.'
            descLink=''
            backgroundImg={MusicParty}
            leftBtnTxt='SOURCE CODE'
            leftBtnLink='https://github.com/abtison1127/music-party-with-spotify'
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
          />
          <Item
            title=''
            desc=''
            descLink=''
            backgroundImg={ExpenseTracker}
            leftBtnTxt='LIVE'
            leftBtnLink='https://salary-expense-tracker.netlify.app/'
            rightBtnTxt='SOURCE CODE'
            rightBtnLink='https://github.com/abtison1127/Expense-Tracker-w-Speechly'
            twoButtons='true'
          />
          <Item
            title='A-Star Pathfinding Visualizer'
            desc='A program that visualizes the A-Star Algorithm using Pygame in Python3 as it runs.'
            descLink=''
            backgroundImg={Pathfinder}
            leftBtnTxt='SOURCE CODE'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
          />
           <Item
            title='Tesla Clone'
            desc='Tesla landing page with ReactJS'
            descLink=''
            backgroundImg={Tesla}
            leftBtnTxt='LIVE'
            leftBtnLink='https://tesla-landing-page-clone.netlify.app/'
            rightBtnTxt='SOURCE CODE'
            rightBtnLink='https://github.com/abtison1127/tesla-landing-page'
            twoButtons='true'
          />
           {/* <Item
            title='Solar for New Roofs'
            desc='Money-back guarantee'
            descLink=''
            backgroundImg={SolarRoof}
            leftBtnTxt='CUSTOM ORDER'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
            twoButtons='true'
          />
           <Item
            title='Accessories'
            desc='Money-back guarantee'
            descLink=''
            backgroundImg={Accessories}
            leftBtnTxt='SHOP NOW'
            leftBtnLink=''
            rightBtnTxt='LEARN MORE'
            rightBtnLink=''
          /> */}
        </div>
    </div>
  );
}

export default App;
