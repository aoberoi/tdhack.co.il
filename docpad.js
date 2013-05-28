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
      'speakers',
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
      speakers: "Judges",
      schedule: "Schedule",
      prizes: "Prizes",
      partners: "Host",
      sponsors: "Sponsors",
      contact: "Contact"
    },

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Coffee",
        description: "",
        time: "8h00"
      },
      {
        name: "Welcome and Introductions",
        description: "Shay Cohen, Telefonica Digital Israel VP R&D",
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
        time: "23h00"
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
        time: "12h45"
      },
      {
        name: "Presentations and Demos",
        description: "Teams present their projects.",
        time: "13h00"
      },
      {
        name: "Break",
        description: "Judges deliberate while everyone else takes a break",
        time: "14h00"
      },
      {
        name: "Judging and Awards Ceremony",
        description: "Teams present their projects",
        time: "14h15"
      },
      {
        name: "Event ends",
        description: "Goodbyes and Photos :)",
        time: "15h00"
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "TokBox, Inc.",
        logo: "themes/yellow-swan/img/tokbox.png",
        url: "http://www.tokbox.com"
      },
      {
        name: "SendGrid",
        logo: "themes/yellow-swan/img/sendgrid.jpg",
        url: "http://sendgrid.com"
      },
      {
        name: "Yotpo",
        logo: "themes/yellow-swan/img/yotpo.jpg",
        url: "https://www.yotpo.com"
      },
      {
        name: "Afeka College of Engineering",
        logo: "themes/yellow-swan/img/afeka.gif",
        url: "http://www.afeka.ac.il/Afeka_College_of_Engineering_en.aspx"
      }
    ],

    speakers: [
      {
        name: "Eran Aharonson",
        bio: "An expert in intelligent systems, natural user interfaces, recognition methods, machine learning and mobile products. Eran brings over two decades of experience in management, business development, sales, and technology. He founded and served as CEO of Intuitive User Interfaces, an innovative company that simplified smartphone user interfaces utilizing machine learning techniques. Prior to that Eran was the CEO of ART (Advanced Recognition Technologies), a leading handwriting and speech recognition company that was acquired by Nuance Communications (NASDAQ: NUAN). He also served as VP of Computational Life Science R&D at Compugen (NASDAQ: CGEN). Eran holds several patents in the field of natural user interfaces. Eran is currently a lecturer, head of mobile system technology specialization at Afeka Tel Aviv Academic College of Engineering, Software Engineering Department. and head of ACMiX - Afeka Center for Mobile Intelligent Experience. Eran holds Masters and Bachelor degrees in Computer Science from the Technion-Israel Institute of Technology.",
        photo: "themes/yellow-swan/img/eran.jpg"
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
