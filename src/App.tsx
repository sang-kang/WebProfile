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
                <h5 className="card-title">금값은 어떻게 결정되는 걸까?</h5>
                <p className="card-text text-justify">
금값을 알기 위해선 금본위 제도, 미국 달러와 금의 관계를 알아야 한다. 
1900년대 초반엔 금본위 화폐제도였다. 금 1온스당 10달러 찍을 수 있었다. 즉, 이 시기에는 금1온스 가격이 10달러였다. 1935년도 대공황을 극복하기 위해 금본위를 1온스당 35달러로 완화했다. 즉, 보유금은 그대로인데 돈을 더 많이 찍어 화폐의 유통량을 늘렸다. 지금으로 따지면 금리를 낮추고 유동성을 높인 효과를 만든것이다. 이상태로 1971년도 까지 금 가격은 1온스당 35달러를 유지한다. 베트남 전쟁 후 경기가 안 좋아진 미국은 1971년 8월 15일에 닉슨 대통령은 금 본위를 폐지하고 화폐공급을 늘린다. 그 결과 1978년도에는 금 1온스당 600불을 넘어서게 된다. 즉, 인플레이션이 발생한다. 2008년 글로벌 금융위기 당시 경기부양을 위해 금리를 빠르게 내리고 유동성을 늘리는 양적완화 시행한다. 그 결과 2012년에는 금 1온스당 1900불 돌파하게 된다. 2013년 미국 경기가 좋아지면서 FRB버냉키 의장이 금리인상을 선언하면서 2016년 금 1온스당 1000불까지 하락했다. 
즉, 금값은 유동성에 의해 결정된다. 시장에 유동성이 풍부하면(금리가 하락하면) 금값은 올라가고, 시장에 유동성이 줄어들면(금리가 상승하면) 금값은 하락하게 된다. 
언제부터인가 경기가 안 좋아지면 중앙은행이 나서서 금리를 인하하고 양적완화를 실시한다. 따라서 경기둔화가 된 지금시점에 금에 투자하는것도 나쁘지 않을 것 같다.
                </p>
              </div>
            </div>   
          </div>
        </div>
        <div className="row justify-content-center pt-3">
          <div className="col col-lg-8 col-md-10 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">보호무역주의와 미중 무역전쟁</h5>
                <p className="card-text text-justify">
무역분쟁의 역사를 살펴보기 위해 1929년도로 돌아가보자. 1929년 미국은 자동차 산업 불황으로인한 불경기 때문에 관세장벽을 높이면서 보호무역정책을 펼친다. 이에 다른 나라들도 관세장벽을 높이면서 전 세계적인 무역장벽이 생기면서 성장의 파이가 위축되었다. 
미중무역전쟁은 1930년대의의 상황을 상기시킨다. 미국 중국 두 나라의 충돌이 결국 전 세계적인 무역장벽으로 이어진다면 엄청난 수요위축과 함께 세계경제가 위태로울 수 있다.
                </p>
              </div>
            </div>   
          </div>
        </div>
        <div className="row justify-content-center pt-3">
          <div className="col col-lg-8 col-md-10 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2015년 양적완화를 통한 환율전쟁과 중국증시급락</h5>
                <p className="card-text text-justify">
2015년은 양적완화의 시대였다. 일본 아베정부는 만성적인 디플레이션상황을 타계하기 위해 양적완화정책을 시행한다. 인플레이션이란 물건값의 상승 의미하는데 바꾸어 말하면 화폐가치의 하락을 의미한다. 즉, 일본정부는 양적완화를 통해 인플레이션을 형성시키려 했다. 엔화의 공급 증가와 함께 엔화가치는 하락하게 되고 일본의 수출경쟁력은 올라가게 된다. 이와더불어 유럽중앙은행이 양적완화 실시한다. 
일본과 유럽의 양적완화로 엔화와 유로화 가치가 매우 떨어졌다. 이 당시 중국은 달러대비 위안화를 절상하고 있었다. 엔화나 유로화는 달러대비 약한 상태에서, 중국 혼자 달러대비 강세를 보이는 상태가 되었다. 수출성장이 어려워진 중국은 2015년 8월 11일 기습적으로 위안화를 절하시켰다. 중국은 2005년 7월 22일부터 약 10년간 지속적으로 위안화 절상시켜왔는데(환율하락) 10년만에 위안화를 절하(환율상승)한 것이다. 이에 시장은 일본, 유럽에 이어 중국까지 자국통화 약세를 만들면 전세계 수요가 위축되겠다는 공포감에 사로잡히게 되고, 중국증시는 급락하게 된 것이다. 
                </p>
              </div>
            </div>   
          </div>
        </div>
        <div className="row justify-content-center pt-3">
          <div className="col col-lg-8 col-md-10 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">환율상승(원화가치 평가절하)이 경제에 미치는 영향</h5>
                <p className="card-text text-justify">
환율은 세계에서 적용되는 돈의 가격이라고 생각할 수 있다. 금리는 국내투자자가 국내주식시장에 투자할 때 영향을 미치고, 환율은 외국인 투자자가 국내주식시장에 투자할 때 영향을 미친다.
환율상승으로 발생하는 긍정적 효과(경상수지 측면)
원하가치가 떨어지면 달러가 강세가 된다. 원화가차기 떨어지면 외국인 입장에서는 구매력이 높아지는거고, 수출하는 입장에선 가격경쟁력이 높아져 더 많이 팔수있어 이익이난다. 따라서 주가가 오를 것이다. 
환율상승으로 발생하는 부정적 효과(자본수지 측면)
우리나라 원화가치가 떨어지면 외국인 투자자 입장에서 주식투자 이익보다 달러로 환전할 때 비용이 더 많이 들기 때문에 원화가치 더 떨어지기 전에 주식팔고 나가버린다. 
                </p>
              </div>
            </div>   
          </div>
        </div>
        <div className="row justify-content-center pt-3">
          <div className="col col-lg-8 col-md-10 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">유가하락이 세계 경제에 미치는 영향</h5>
                <p className="card-text text-justify">
올 초 이란사태로 국제유가가 배럴당 65달러까지 올랐다가 코로나19 사태가 트리거가 되어 상승세가 꺾였다. 
원유시장은 일반적으로 유가가 하방으로 작용한다. 그 이유는 미국이 2005년 이후 셰일 오일이 번성하면서 원유공급을 빠르게 늘리고있고, 이에 중동 산유국 뿐만 아니라 러시아도 원유 생산을 늘리고 있기 때문이다. 
만약 미국, 사우디, 러시아 3국이 원유공급을 동시에 폭발적으로 늘리면 유가가 폭락할것이다. 실제로 2016년도 2월 105달러였던 유가가 26달러까지 폭락하며 사우디 재정위기가 생겼다. 따라서 미국에 비해 상대적으로 원유에 대한 의존도가 높은 중동과 러시아는 유가가 너무 많이 떨어지는 걸 원하지 않는다. 이에 사우디와 러시아는 원유 감산 공조를 시작하며 유가를 떠받히는데 미국은 여전히 원유공급 많이 하고 있기에 미국만 이익을 보는 상황이 연출된다.
이에 러시아가 불만을 갖고 감산공조에 균열이 생기고 있는데 코로나19가 터지면서 유가가 확 주저 않게 된다. 그런데 만약 유가가 주저않게 되면 미국의 에너지 셰일 기업들이 큰 타격을 받게 된다. 셰일 오일은 추출 특성상 예상치 대비 현저히 적게 추출되는 경우가 많다. 빚을 내서 원유채굴에 들어간 셰일 기업들은 생각보다 많은 원유를 채굴 못하게 되고 투자대비 수익이 낮다. 따라서 미국 셰일기업들의 경우 부실이 굉장히 심하다. 이런상태에서 유가가 하락하면 미국 셰일기업들이 굉장히 어려운 상황에 처하게 될 것이다. 
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
                <p>Alvin Toffler create term prosumer, the mixed word using producer and consumer. I-citizen has similar meaning but difference. To begin with, <strong>I-citizen has continuous passions.</strong> The motivator to this passion is digital ability(I CAN DO), collectivism(I CONNECT), effect(I AM), and reputation(I MATTER). Next, <strong>I-citizen has clarity</strong>, because I-citizen no longer need public media, a fabricate media, they could show exactly what they want to show. So that consumers no longer have faith in brands’ advertisement, using public media,  but follow I-citizen’ opinion which is more objective. So, brand need to get into the network of I-citizen. There’s now a transition in marketing.</p>
                <p>Brand should be open. But there are some problems. <strong>On the web, the rate of information diffusion is so rapid that brands have to consider how to cope with technology leakage.</strong> Brands  are now at a crossroads. They should choice which way to go whether open their technology and satisfy customers or protect their own technique and let costumers down.</p>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img className="img-fluid" src="/assets/img/book2.jpeg" alt="한 권으로 읽는 디지털 혁명 4.0"/>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <h5 className="mt-0 mb-1">한 권으로 읽는 디지털 혁명 4.0</h5>
                <p>There were 3 Progression in human history-the agricultural revolution(first progression), the industrial revolution(second progression), and the computerization revolution(third progression). The first and second revolution help decrease human physical labors. But , the third revolution connect with human psychologically. With the computerization revolution, not only complicated calculation human can’t do but also lots of information, idea, and news could be available and we call it this era weak AI(Artificial intelligence). People thought  human psychological labor would not be alternated by weak AI, because to actuate this AI human have to put arithmetic operation and rules in advance. However, <strong>with the advent of Deep learning, AI could learn itself and no longer needs human resource.</strong> We call it strong AI and Fourth progression.</p>
                <p>In fourth progression, Data themselves is money.  Data are collected Through A super-highway information network, saved by clouding computer, and learn themselves with Deep learning so that data creat added value. <strong>These expandability intimidate human resource area.</strong> Therefore, <strong>to protect human, Robot tax is raised.</strong> The development of technology always threatened lowly skilled workers. Tech brings richness but spread the gap between the rich and the pool. So, <strong>with robot tax, the gap could be narrowed. However</strong>, Robot has no legal personality, so paying taxes on robot will be impossible, and even if we could pay taxes on robot, it will make robot industry be threatened, to slow human progress. As supporters of robot say, <strong>when robot replace human labor, human ultimately achieve self-realization through liberation from labor.</strong></p>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img className="img-fluid" src="/assets/img/book3.jpeg" alt="아마존 월 1억 만들기"/>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <h5 className="mt-0 mb-1">아마존 월 매출 1억 만들기</h5>
                <p>Now that Korea's online shopping market is saturated, we have to turn our eyes around the globe. However, people are afraid to enter the global market due to language problems and lack of knowledge about overseas markets. If you use the Amazon Global Selling Web site, you can solve this problem.</p>
                <p>Fulfillment by Amazon (FBA) refers to the Amazon warehouse system that integrates warehouse packages. You have to pay a separate fee to use the FBA. When using FBA, when a seller sells goods through Amazon in the US Is not delivered directly in Korea, but is delivered to the seller in the pre-stocked FBA. It is connected with the Amazon Prime service, which allows the seller to save about 10 days of delivery time rather than using their own logistics service. In addition, since Amazon responds to problems after customer orders, sellers can just focus on selling. </p>
                <p>There are 11 countries in the Amazon market, but there are eight countries Korea sellers can sell. If you want to advance to North America and South America then get US Amazon, to Europe then get UK Amazon and to Asia then get Japan Amazon.</p>
                <p>You need procedures to sell. First, create a Pioneer account and get a US account number. Then you have to decide what to sell and create a seller account. There are two kinds of sellers account. If you are going to sell more than 40 a month, you will be registered as an individual seller, and you will pay $ 39,99 monthly and others. If you are planning to sell less than 40 a month, register as a professional seller and pay $ 0.99 + other sales fee for each sale. When the seller's membership is completed, the seller's sales page, the seller's central page, is created. We will update the payment method from Amazon cellar Central to Pioneer account. After that, the goods must be registered. there are two categories, depending on whether they already exist in Amazon. The next step is to choose the shipping method, whether to ship directly or FBA. Finally, if the item is sold, it will be automatically credited to the Pioneer account.</p>
                <p><strong>The most important thing to raise a seller's sales is the exposure on a buy box.</strong> When multiple sellers sell the same item, only one seller who satisfies certain conditions occupies the buy box exposure position, and when the user clicks ‘the Add to cart ‘button, they buy ‘buy box’ seller’s item. Although Amazon does not reveal the Buybox exposure algorithm, it can be inferred that competitive prices, FBA utilization, high customer satisfaction, sustained inventory volume, and a large number of orders determine the Buybox exposure.</p>
                <p><strong>Only 30% of Amazon customers view pages after the first page of search results.</strong> That is, sellers should try to expose their products to the first page of search results, and <strong>the most effective way is to use Amazon advertising.</strong> When the advertisement is proceeded, the ‘advertisement’ mark is displayed and it is exposed to the upper part of the search result. However, not all products can be advertised. The seller's goods must be in the buy box state, and the merchandise condition must be new.</p>
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
