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
      'prizes',
      'location',
      'speakers',
      'schedule',
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
        time: "9h00"
      },
      {
        name: "Venue Introduction",
        description: "Afeka College",
        time: "9h15"
      },
      {
        name: "API Presentations",
        description: "Our sponsors will demonstrate and explain some of the technologies they are making available for participants",
        time: "9h25"
      },
      {
        name: "Breakout for Ideas and Team Formation",
        description: "Everyone is encourage to talk about their ideas and skills with one another. We will open up the mic to help people address the enitre room.",
        time: "9h45"
      },
      {
        name: "Start Hacking!",
        description: "",
        time: "10h15"
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
      },
      {
        name: "Omri Cohen",
        bio: "Omri is the co-founder and CTO of Yotpo. BSc in Electrical Engineering and Computer Science. Passionate about technology and the internet . Love to build things and then make them grow. ",
        photo: "themes/yellow-swan/img/omri-p.png"
      },
      {
        name: "Mike Swift",
        bio: "Meet Swift, developer evangelist at-large for SendGrid and mad scientist hacker. As a lifelong developer himself, Swift has made it his personal mission to enable developers by helping them get the tools and resources they need to make awesome, creative stuff. Swift is also one of the founders of Hacker League, the platform for hackathons, and a former engineer at Crowdtap.",
        photo: "themes/yellow-swan/img/swift.jpeg"
      },
      {
        name: "Shay Cohen",
        bio: "Shay is the head Communication Products R&D in Telefónica Digital, responsible of developing the next generation communication platform and products for Telefónica. Prior to his current role in Telephonic Digital, Shay was the VP R&D of Jajah and spent 4 years in Microsoft’s telecom division and 6 years in VocalTec as R&D director. Shay has vast experience in leading development of Telephony, Billing & VoIP products, Voice-Over-Broadband and OTT services. During the years Shay has led many integrations and services for large T1 operators.",
        photo: "themes/yellow-swan/img/shay.png"
      },
      {
        name: "Ankur Oberoi",
        bio: "Ankur is a Developer Evangelist for Tokbox. He hacks with developers on all types of projects, but especially those involving OpenTok. Some of his strongest skills are JavaScript (browser and node), iOS, and Ruby. Ankur also regularly meets with entreprenurs and founders to help them validate and implement ideas they are working on. He has a B.S. in Computer Engineering and attended the University of Maryland.",
        photo: "themes/yellow-swan/img/ankur.jpg"
      },
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
