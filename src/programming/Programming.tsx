import * as React from 'react';

interface ListItem {
  title: string;
  description: string;
  imageUrl: string;
  period: string;
  skills: string[];
  link?: string;
}

class Programming extends React.Component {

  private static readonly items: ListItem[] = [
    {
      title: "Web Profile",
      imageUrl: "assets/img/web-profile.png",
      description: "Personal web portfolio. Single page static website with React which hosted on S3. Adapted Bootstrap framework to make responsive web supports cross browsing",
      period: "2020.06 ~ ",
      skills: ["Java Script", "Type Script", "React", "Bootstrap", "git", "npm", "aws s3 static web"],
      link: "http://sangyoon-homepage.s3-website.ap-northeast-2.amazonaws.com/"
    },
    {
      title: "Gomoku Online",
      imageUrl: "assets/img/gomoku.png",
      description: "1:1 gomoku game service. Web game developed fully on HTML5 canvas object without any help of heavy game engine. Dynamic programming has used to fast & efficiently scan through stones on the board and judge winner.",
      period: "2020.12 ~ 2021.01",
      skills: ["Java Script", "Type Script", "git", "npm", "HTML5 Canvas"],
      link: "http://sangyoon-gomoku.s3-website.ap-northeast-2.amazonaws.com/"
    },
    {
      title: "Covid 19 News",
      imageUrl: "assets/img/covid-19-news.png",
      description: "A Spring scheduled task that regularly update user with the latest Covid-19 news. Choose open api over web scrawling due to accuracy and uniform output. Make use of Jackson object mapper to reliably convert json out into java model calss, which makes easy to map news model to table entry.",
      period: "2020.12 ~ 2021.01",
      skills: ["Java", "Spring", "git", "maven", "Naver News Open API", "Jackson", "Oracle", "MyBatis"]
    },
    {
      title: "Live Chatting",
      imageUrl: "assets/img/webchat.png",
      description: "A web chatting service. Adapted asynchronous event driven approach with web socket. Applied singleton pattern on the server to manage multiple connections.",
      period: "2021.02 ~ 2021.02 ",
      skills: ["Java Script", "Type Script", "git", "npm", "Web socket"]
    }
  ];

    public render() {
      return (
          <div>
            <div className="jumbotron">
              <h1 className="display-4">Programming</h1>
              <hr className="my-4"/>
              <p>"Hello! I'm Kang Sangyoon, a new developer.</p>
              <p>I used to live with the joy of learning and being immersed in something new, but now I'm into programming.</p>
              <p>I left a trail of my passion here."</p>
            </div>
            <div className="row justify-content-center pt-3">
              <div className="col col-lg-8 col-md-10 col-sm-12 text-left">
                {
                  Programming.items.map(item => (
                    <div className="row mt-3 mb-3">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <img className="img-fluid" src={item.imageUrl} alt={item.title}/>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 list-item">
                        <a href={item.link ? item.link : "#"} target={item.link ? "_blank" : "_self"} rel="noreferrer"><h5 className="mt-0 mb-1">{item.title}</h5></a>
                        <div>
                          <p>{item.period}</p>
                          <p>{item.description}</p>
                          <p>{item.skills
                              .map(skill => (<span className="badge badge-info mr-1">{skill}</span>))}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        );
    }
}

export default Programming;