const pageTxt = (() => {

  const presentation = {
    title: 'Who am I?',
    body: 
      "Hey, I’m Henry, and I currently Study at Microverse, a remote coding school, " + 
      "where I train my skills every day as a full-stack software developer. <br>" +
      "In the past year, I’ve created plenty of React, Rails, and Web projects additionally, " +
      "growing my teamwork through pair coding with people internationally. " 
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

  const graphic = {
    title: 'My Skills',
    body: {
type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
      /*
      type: 'doughnut',
      data: {
        labels: ['Html & CSS', 'JavaScript', 'Ruby', 'Ruby On Rails'],
        dataSets: [{
          label: '# Languages',
          data: [12, 14, 15, 16],
          backgroundColor: [
            'red',
            'green',
            'blue',
            'yellow',
          ],
          borderColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderWidth: 1
        }]
      },
      options: {}
      */
    }
    
  };

  return {
    presentation,
    searching,
    contact,
    graphic
  }
})();

export default pageTxt;
