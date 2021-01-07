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
    title: "Whant to talk to me?",
    body:
      "Well, I’d love to not only connect with possible employers, " +
      "but also people who share the same interests as me. " +
      "So, want to hire me, or invite me for a cup of coffee? " +
      "Just contact me through <a href='https://www.linkedin.com/in/heflerdev/'>LinkedIn</a> " +
      "or through the e-mail heflerdev@gmail.com."
  }

  return {
    presentation,
    searching,
    contact
  }
})();

export default pageTxt;
