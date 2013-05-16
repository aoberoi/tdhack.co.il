module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "TDHack",
      description: "The first Telefonica Digital Hackathon in Israel",
      date: "June 6-7, 2013",
      price: "₪50",
      venue: "Afeka College",
      address: "Mivtsa Kadesh 38",
      city: "Tel Aviv",
      state: "69107, Israel"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://tdhack.co.il",
      googleanalytics: ""
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      //'speakers',
      'schedule',
      'prizes',
      'partners',
      'sponsors',
      //'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      prizes: "Prizes",
      partners: "Host",
      sponsors: "Sponsors",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Breakfast",
        description: "",
        time: "8h00"
      },
      {
        name: "Welcome and Introductions",
        description: "Gil Cohen and Shay Cohen",
        time: "9h30"
      },
      {
        name: "Venue Introduction",
        description: "Afeka College",
        time: "9h45"
      },
      {
        name: "API Presentations",
        description: "Our sponsors will demonstrate and explain some of the technologies they are making available for participants",
        time: "10h00"
      },
      {
        name: "Breakout for Ideas and Team Formation",
        description: "Everyone is encourage to talk about their ideas and skills with one another. We will open up the mic to help people address the enitre room.",
        time: "10h30"
      },
      {
        name: "Start Hacking!",
        description: "",
        time: "11h00"
      },
      {
        name: "Lunch Break",
        description: "",
        time: "12h30"
      },
      {
        name: "Mentoring and Workshops",
        description: "Mentors from the sponsoring companies will be available for feedback and deeper dives into their technologies.",
        time: "13h30"
      },
      {
        name: "Dinner",
        description: "",
        time: "18h30"
      },
      {
        name: "Day 1 Close",
        description: "",
        time: "23h30"
      },
      {
        date: "<b>Day 2</b> Friday June 7, 2013"
      },
      {
        name: "Coffee and Breakfast",
        description: "Teams continue hacking",
        time: "8h00"
      },
      {
        name: "Lunch",
        description: "",
        time: "12h00"
      },
      {
        name: "Submission Deadline",
        description: "All projects must be submitted online at Hacker League",
        time: "13h45"
      },
      {
        name: "Presentations and Demos",
        description: "Teams present their projects.",
        time: "13h45"
      },
      {
        name: "Break",
        description: "Judges deliberate while everyone else takes a break",
        time: "15h15"
      },
      {
        name: "Judging and Awards Ceremony",
        description: "Teams present their projects",
        time: "15h30"
      },
      {
        name: "Event ends",
        description: "Goodbyes and Photos :)",
        time: "15h30"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "TokBox, Inc.",
        logo: "themes/yellow-swan/img/tokbox.png",
        url: "http://www.tokbox.com"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Telefonica Digital",
        logo: "themes/yellow-swan/img/telefonica-digital.jpeg",
        url: "http://www.telefonica.com/en/digital"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    }
  }
};
