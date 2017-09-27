import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';
import Cards from './components/cards/Cards';
import Table from './components/table/Table';
import Footer from './components/footer/Footer';



class App extends Component {
  render() {
    return (
    <div className="container-fluid">
      <Navigation />
      <Hero />
      <div className="fuzz">
        <Cards src="/images/germany.jpg" country="Germany" tourism="Germany Tourism Site" link="http://www.germany.travel/en/index.html" />
        <Cards src="/images/thailand.jpg" country="Thailand" tourism="Thailand Tourism Site" link="https://www.tourismthailand.org/landing/en.html"/>
        <Cards src="/images/Peru.png" country="Peru" tourism="Peru Tourism Site" link="http://www.peru.travel/?internacional"/>
        <Cards src="/images/italy.png" country="Italy" tourism="Italy Tourism Site" link="http://www.italia.it/en/home.html"/>
      </div>
      <div>
        <table className="table table-striped" cellspace="0">
          <thead>
            <tr>
              <th>Destination</th>
              <th>Capital</th>
              <th>Official Language</th>
              <th>Population (in millions)</th>
              <th>Currency</th>
            </tr>
              <Table destination="Germany" capital="Berlin" language="German" population="82.67" currency="Euro"/>
              <Table destination="Thailand" capital="Bangkok" language="Thai" population="68.86" currency="Thai baht"/>
              <Table destination="Peru" capital="Lima" language="Spanish" population="31.77" currency="Sol"/>
              <Table destination="Italy" capital="Rome" language="Italian" population="60.6" currency="Euro"/>
          </thead>
        </table>
      </div>
      <Footer />
    </div>
    );
  }
}

export default App;
