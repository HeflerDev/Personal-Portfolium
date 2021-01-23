import gameImg from '../img/game_demo.png';
import socialImg from '../img/social_demo.png';
import csStackImg from '../img/csstack.png';

const pageTxt = (() => {

  const presentation = {
    title: 'Full-Stack',
    body: 
      "So, I currently Study at Microverse, a remote coding school, " + 
      "where I train my skills every day<span> as a full-stack software developer</span>. <br>" + 
      "My design focus on functionality, simplicity and getting straight to the point " +
      "as you<span>, who is using a smartphone, </span> will notice in this page. "
  }

  const searching = {
    title: "What I'm looking for?",
    body:
      "I’m searching for challenging opportunities to work with a development team, " +
      "looking forward to making new contacts, learn new things, " +
      "and integrate myself further into the new technologies that are yet to come.<br>"
  }

  const contact = {
    title: "Want to talk to me?",
    body:
      "Well, I’d love to not only connect with possible employers, " +
      "but also people who share the same interests as me. " +
      "So, want to hire me, or invite me for a cup of coffee? " +
      "Just contact me through <a href='https://www.linkedin.com/in/heflerdev/'>LinkedIn</a> " +
      "or through the e-mail heflerdev@gmail.com."
  }

  const portfolio = {
    title: "Portfolio",
    body: 
    "Most of my projects are hosted on <strong><a href='https://github.com/heflerdev'>github</a></strong>.",
    projects: {
      phaserGame: {
        img: gameImg,
        description: 
          '<strong>Caves and Bats</strong> is a game made in Phaser 3 to test my skills when dealing ' + 
          'with something entirely new.'
      },
      socialNetwork: {
        img: socialImg,
        description: 
        '<strong>In#Tune</strong> project was made to be a twitter-like social network using Ruby on Rails.  <br>'
      },
      csStack: {
        img: csStackImg,
        description: 
        'Since CSS is very present in web development, I created <strong>CSStack</strong>, a framework ' +
          'that ease the process of building the structure of a page.'
      }
    }
  }

  const graphic = {
    title: 'My Skills',
    body: 
    "<div>In the past year, I’ve created plenty of <strong>React, Rails, and Web projects</strong> additionally, " +
    "growing my teamwork through pair coding with people from all around the world. </div>" 
    ,
    data: {
      type: 'doughnut',
      data: {
          labels: ['Html & Css', 'JavaScript', 'React', 'Ruby', 'Ruby On Rails'],
          datasets: [{
              label: '# of Votes',
              data: [21.8, 32.8, 5.1, 10.9, 29.4],
              backgroundColor: [
                'orange',
                'blue',
                'darkblue',
                'red',
                'darkred'
              ],
              borderWidth: 1
          }]
      },
      options: {
        layout: {
          padding: 20,
        },
        legend: {
          position: 'right',
          labels: {
            fontColor: 'black'
          }
        }
      }
    }
    
  };

  return {
    presentation,
    searching,
    contact,
    graphic,
    portfolio
  }
})();

export default pageTxt;
