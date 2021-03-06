import * as React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import './App.css';
import Programming from "./programming/Programming"

class App extends React.Component {

  public render() {

    return (
      <div className="App container-fluid">
        <header className="App-header mh-100">
          <h1 className="row justify-content-center">SANGYOON KANG</h1>
          <nav className="navbar navbar-expand-lg  justify-content-center">
            <div className="navbar" id="navbarText">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item"><Link to="/" className="nav-link">ABOUT</Link></li>
                  <li className="nav-item"><Link to="/programming" className="nav-link">PROGRAMMING</Link></li>
                  <li className="nav-item"><Link to="/books" className="nav-link">BOOKS</Link></li>
                  <li className="nav-item"><Link to="/economy" className="nav-link">ECONOMY</Link></li>
                </ul>
            </div>
          </nav>
        </header>
        <Switch>
          <Route exact={true} path="/" component={this.about} />
          <Route exact={true} path="/programming" component={Programming} />
          <Route exact={true} path="/books" component={this.books} />
          <Route exact={true} path="/economy" component={this.economy} />
        </Switch>
      </div>
    );
  }

  private about() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">About me</h1>
          <p className="lead">KNOW ME.</p>
        </div>
        <div className="row justify-content-center pt-3">
          <div className="col col-lg-8 col-md-10 col-sm-12">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img className="img-fluid rounded" src="/assets/img/profile.jpeg" alt="ME"/>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 text-left">
                <h5 className="mt-0">I AM...</h5>
                <p>A capable man has keen insight and keen insight is drawn by diverse experience. I read as many book as possible, share opinion with passionate and skilled people, and move around many country. I am outgoing and like meeting new friends. I keep pioneering, discovering, and exploring the world.</p>
                <a href="mailto:barmitsva11@gmail.com" className="text-info">barmitsva11@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private economy() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Economy</h1>
          <hr className="my-4"/>
          <p>"History of where I stepped in past ..."</p>
        </div>
        <div className="row justify-content-center pt-3">
          <div className="col col-lg-8 col-md-10 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">???????????????????????????????????????????</h5>
                <p className="card-text text-justify">
???????????????????????????????????????????????,?????????????????????????????????????????????????????????.??
1900????????????????????????????????????????????????.???????1???????????10??????????????????????????????.?????,????????????????????????1???????????????????10????????????.??1935??????????????????????????????????????????????????????????1???????????35???????????????????????.?????,????????????????????????????????????????????????????????????????????????????????????????????????.?????????????????????????????????????????????????????????????????????????????????????????????????.????????????????1971????????????????????????????????1???????????35???????????????????????.????????????????????????????????????????????????????????????????1971?????8?????15??????????????????????????????????????????????????????????????????????????????????????.???????????????1978???????????????????1???????????600????????????????????????????.?????,??????????????????????????????????.??2008???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.???????????????2012????????????????1???????????1900?????????????????????????.??2013?????????????????????????????????????????FRB????????????????????????????????????????????????????????2016??????????1???????????1000???????????????????????.??
???,???????????????????????????????????????????????.???????????????????????????????????????(???????????????????????)?????????????????????????,???????????????????????????????????????(???????????????????????)?????????????????????????????????.??
????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.??????????????????????????????????????????????????????????????????????????????????????????????????????????????.
                </p>
              </div>
            </div>   
          </div>
        </div>
        <div className="row justify-content-center pt-3">
          <div className="col col-lg-8 col-md-10 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">???????????????????????????????????????????</h5>
                <p className="card-text text-justify">
??????????????????????????????????????????????????1929??????????????????????????.??1929????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.??
???????????????????????1930????????????????????????????????????????.???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.
                </p>
              </div>
            </div>   
          </div>
        </div>
        <div className="row justify-content-center pt-3">
          <div className="col col-lg-8 col-md-10 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2015?????????????????????????????????????????????????????????????????</h5>
                <p className="card-text text-justify">
2015?????????????????????????????????????.????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.?????,???????????????????????????????????????????????????????????????????????????????????????.??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.????????????????????????????????????????????????????????????????????.??
????????????????????????????????????????????????????????????????????????????????????????????.?????????????????????????????????????????????????????????????????????????????.?????????????????????????????????????????????????????????????,??????????????????????????????????????????????????????????????????????????.????????????????????????????????????????????2015?????8?????11???????????????????????????????????????????????????.?????????????2005?????7?????22????????????????10?????????????????????????????????????????????????????????(????????????)??10???????????????????????????????(????????????)??????????????.???????????????????????????,??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????,???????????????????????????????????????????????.??
                </p>
              </div>
            </div>   
          </div>
        </div>
        <div className="row justify-content-center pt-3">
          <div className="col col-lg-8 col-md-10 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">????????????(??????????????????????????)?????????????????????????????????</h5>
                <p className="card-text text-justify">
??????????????????????????????????????????????????????????????????????????????????????.????????????????????????????????????????????????????????????????????????????????????????????,?????????????????????????????????????????????????????????????????????????????????????????????????.
???????????????????????????????????????????????????(????????????????????)
???????????????????????????????????????????????????????????.?????????????????????????????????????????????????????????????????????????????????????????????,???????????????????????????????????????????????????????????????????????????????????????????????????????.?????????????????????????????????????????.??
???????????????????????????????????????????????????(????????????????????)
?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.??
                </p>
              </div>
            </div>   
          </div>
        </div>
        <div className="row justify-content-center pt-3">
          <div className="col col-lg-8 col-md-10 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">?????????????????????????????????????????????????????</h5>
                <p className="card-text text-justify">
???????????????????????????????????????????????????????65?????????????????????????????????????19??????????????????????????????????????????????????????????.??
???????????????????????????????????????????????????????????????????????.?????????????????????????????2005????????????????????????????????????????????????????????????????????????????????????????????,????????????????????????????????????????????????????????????????????????????????????????????????????????????????.??
??????????????,???????????,?????????????3?????????????????????????????????????????????????????????????????????????????????????????????.?????????????2016????????2?????105?????????????????????????26?????????????????????????????????????????????????????????????????.?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.
????????????????????????????????????????????????????????????????????????????????????????????????????19?????????????????????????????????????????????????????????.????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.?????????????????????????????????????????????????????????????????????????????????????????????????????????????.???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.????????????????????????????????????????????????????????????????????????????????.?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????.??
                </p>
              </div>
            </div>   
          </div>
        </div>
      </div>
    );
  }

  private books() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Books</h1>
          <hr className="my-4"/>
          <p>"I read as many books as I can. These are some book that I read recently."</p>
        </div>
        <div className="row justify-content-center pt-3">
          <div className="col col-lg-8 col-md-10 col-sm-12 text-left">
            <div className="row mt-1">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img className="img-fluid" src="/assets/img/book1.jpeg" alt="Open Brand"/>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <h5 className="mt-0 mb-1">Open Brand</h5>
                <p>The name of successful brand itself represented the character of product group. For last 30years, well-controlled brand managing systems, which is one side communication, worked. However, these limited method is no longer available. <strong>With the development of Web, Consumers want to interact with brands.</strong> Not under pressure of others, by themselves they participate in market. To interact with customer, brand should offer 4 experiments : ON-DEMAND, PERSONA, ENGAGING, and NETWORKED - O.P.E.N</p>
                <p>Alvin Toffler create term prosumer, the mixed word using producer and consumer. I-citizen has similar meaning but difference. To begin with, <strong>I-citizen has continuous passions.</strong> The motivator to this passion is digital ability(I CAN DO), collectivism(I CONNECT), effect(I AM), and reputation(I MATTER). Next, <strong>I-citizen has clarity</strong>, because I-citizen no longer need public media, a fabricate media, they could show exactly what they want to show. So that consumers no longer have faith in brands??? advertisement, using public media,  but follow I-citizen??? opinion which is more objective. So, brand need to get into the network of I-citizen. There???s now a transition in marketing.</p>
                <p>Brand should be open. But there are some problems. <strong>On the web, the rate of information diffusion is so rapid that brands have to consider how to cope with technology leakage.</strong> Brands  are now at a crossroads. They should choice which way to go whether open their technology and satisfy customers or protect their own technique and let costumers down.</p>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img className="img-fluid" src="/assets/img/book2.jpeg" alt="??? ????????? ?????? ????????? ?????? 4.0"/>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <h5 className="mt-0 mb-1">??? ????????? ?????? ????????? ?????? 4.0</h5>
                <p>There were 3 Progression in human history-the agricultural revolution(first progression), the industrial revolution(second progression), and the computerization revolution(third progression). The first and second revolution help decrease human physical labors. But , the third revolution connect with human psychologically. With the computerization revolution, not only complicated calculation human can???t do but also lots of information, idea, and news could be available and we call it this era weak AI(Artificial intelligence). People thought  human psychological labor would not be alternated by weak AI, because to actuate this AI human have to put arithmetic operation and rules in advance. However, <strong>with the advent of Deep learning, AI could learn itself and no longer needs human resource.</strong> We call it strong AI and Fourth progression.</p>
                <p>In fourth progression, Data themselves is money.  Data are collected Through A super-highway information network, saved by clouding computer, and learn themselves with Deep learning so that data creat added value. <strong>These expandability intimidate human resource area.</strong> Therefore, <strong>to protect human, Robot tax is raised.</strong> The development of technology always threatened lowly skilled workers. Tech brings richness but spread the gap between the rich and the pool. So, <strong>with robot tax, the gap could be narrowed. However</strong>, Robot has no legal personality, so paying taxes on robot will be impossible, and even if we could pay taxes on robot, it will make robot industry be threatened, to slow human progress. As supporters of robot say, <strong>when robot replace human labor, human ultimately achieve self-realization through liberation from labor.</strong></p>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img className="img-fluid" src="/assets/img/book3.jpeg" alt="????????? ??? 1??? ?????????"/>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <h5 className="mt-0 mb-1">????????? ??? ?????? 1??? ?????????</h5>
                <p>Now that Korea's online shopping market is saturated, we have to turn our eyes around the globe. However, people are afraid to enter the global market due to language problems and lack of knowledge about overseas markets. If you use the Amazon Global Selling Web site, you can solve this problem.</p>
                <p>Fulfillment by Amazon (FBA) refers to the Amazon warehouse system that integrates warehouse packages. You have to pay a separate fee to use the FBA. When using FBA, when a seller sells goods through Amazon in the US Is not delivered directly in Korea, but is delivered to the seller in the pre-stocked FBA. It is connected with the Amazon Prime service, which allows the seller to save about 10 days of delivery time rather than using their own logistics service. In addition, since Amazon responds to problems after customer orders, sellers can just focus on selling. </p>
                <p>There are 11 countries in the Amazon market, but there are eight countries Korea sellers can sell. If you want to advance to North America and South America then get US Amazon, to Europe then get UK Amazon and to Asia then get Japan Amazon.</p>
                <p>You need procedures to sell. First, create a Pioneer account and get a US account number. Then you have to decide what to sell and create a seller account. There are two kinds of sellers account. If you are going to sell more than 40 a month, you will be registered as an individual seller, and you will pay $ 39,99 monthly and others. If you are planning to sell less than 40 a month, register as a professional seller and pay $ 0.99 + other sales fee for each sale. When the seller's membership is completed, the seller's sales page, the seller's central page, is created. We will update the payment method from Amazon cellar Central to Pioneer account. After that, the goods must be registered. there are two categories, depending on whether they already exist in Amazon. The next step is to choose the shipping method, whether to ship directly or FBA. Finally, if the item is sold, it will be automatically credited to the Pioneer account.</p>
                <p><strong>The most important thing to raise a seller's sales is the exposure on a buy box.</strong> When multiple sellers sell the same item, only one seller who satisfies certain conditions occupies the buy box exposure position, and when the user clicks ???the Add to cart ???button, they buy ???buy box??? seller???s item. Although Amazon does not reveal the Buybox exposure algorithm, it can be inferred that competitive prices, FBA utilization, high customer satisfaction, sustained inventory volume, and a large number of orders determine the Buybox exposure.</p>
                <p><strong>Only 30% of Amazon customers view pages after the first page of search results.</strong> That is, sellers should try to expose their products to the first page of search results, and <strong>the most effective way is to use Amazon advertising.</strong> When the advertisement is proceeded, the ???advertisement??? mark is displayed and it is exposed to the upper part of the search result. However, not all products can be advertised. The seller's goods must be in the buy box state, and the merchandise condition must be new.</p>
                <p>The Amazon's entry strategy can be divided into four stages. 1. Category Analysis - Determine which products you want to sell and register them on Amazon. 2. Identify Merchandise with Amazon Advertising - If you start advertising in Amazon, you will be able to catch customers' curiosity by increasing exposure. 3. Increase the type of foam. 4. Then expand the Amazon market - but it does not sell well in the JAPAN because it sells well in the US. Therefore, it is necessary to analyze new country before the market expansion and whether it is price competitiveness.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
