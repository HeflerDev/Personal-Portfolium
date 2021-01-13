const pageTxt = (() => {

  const presentation = {
    title: 'Who am I?',
    body: 
      "Hey, I’m Henry, and I currently Study at Microverse, a remote coding school, " + 
      "where I train my skills every day as a full-stack software developer. <br>" + 
      "My design focus on functionality, simplicity and getting straight to the point, " +
      "as you will notice in this page. "
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
      "I Have several projects hosted on github <a href='https://github.com/heflerdev'>Here</a>."
  }

  const graphic = {
    title: 'My Skills',
    body: 
      "In the past year, I’ve created plenty of React, Rails, and Web projects additionally, " +
      "growing my teamwork through pair coding with people from all around the world. " 
    ,
    data: {
      type: 'doughnut',
      data: {
          labels: ['Html & Css', 'JavaScript', 'React', 'Ruby', 'Ruby On Rails'],
          datasets: [{
              label: '# of Votes',
              data: [21.8, 32.8, 5.1, 10.9, 29.4],
              backgroundColor: [
                'red',
                'green',
                'blue',
                'yellow',
                'brown'
              ],
              borderColor: [
                'darkred',
                'darkgreen',
                'darkblue',
                'darkyellow',
                'darkbrown'
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
