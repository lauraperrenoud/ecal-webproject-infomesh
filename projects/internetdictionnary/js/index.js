$(document).ready(function() {
  var entries = [
    {
      label: "Backbone",
      year: 1989,
      tooltip: "The first packet-switched computer network was the NPL network, followed closely by the ARPANET.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Backbone"
    },
    {
      label: "Honeypot",
      year: 1989,
      tooltip: "Computer security mechanism set to detect, deflect, or, in some manner, counteract attempts at unauthorized use of information systems.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Honeypot"
    },
    {
      label: "HTTP",
      year: 1989,
      tooltip: "HTTP was developed to facilitate hypertext and the World Wide Web.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/HTTP"
    },
    {
      label: "ISP",
      year: 1989,
      tooltip: "In 1989, the first Internet service providers, companies offering the public direct access to the Internet for a monthly fee, were established in Australia and the United States.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/ISP"
    },
    {
      label: "Ransomware",
      year: 1989,
      tooltip: "The first known malware extortion attack, the \"AIDS Trojan\" written by Joseph Popp in 1989, had a design failure so severe it was not necessary to pay the extortionist at all.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Ransomware"
    },
    {
      label: "WWW",
      year: 1989,
      tooltip: "Mark Twain sometimes wrote science fiction? In one of them, he imagined the “telelectroscope,” a device that used telephone wires to create a world-wide communication network.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/WWW"
    },
    {
      label: "Zip",
      year: 1989,
      tooltip: "The .ZIP file format was created by Phil Katz of PKWARE.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Zip"
    },
    {
      label: "Applet",
      year: 1990,
      tooltip: "Any small application that performs one specific task that runs within the scope of a dedicated widget engine or a larger program, often as a plug-in.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Applet"
    },
    {
      label: "spam",
      year: 1990,
      tooltip: "Unsolicited usually commercial messages, such as e-mails, text messages, or Internet postings, sent to a large number of recipients or posted in a large number of places",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Spamming"
    },
    {
      label: "Browser",
      year: 1990,
      tooltip: "The first web browser, called WorldWideWeb, was invented in 1990 by Sir Tim Berners-Lee.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Browser"
    },
    {
      label: "Smartwatch",
      year: 1990,
      tooltip: "Seiko Receptor, première montre permettant de recevoir des messages texte à la manière d’un pager.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/smartwatch"
    },
    {
      label: "Malware",
      year: 1990,
      tooltip: "Software designed to interfere with a computer's normal functioning.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/malware"
    },
    {
      label: "Internaut",
      year: 1990,
      tooltip: "The more someone knows about the Internet, its history and politics, the more likely the term internaut fits them.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/internaut"
    },
    {
      label: "Gopher",
      year: 1991,
      tooltip: "The World Wide Web was in its infancy in 1991, and Gopher services quickly became established. By the late 1990s, Gopher had ceased expanding.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Gopher"
    },
    {
      label: "3D printer",
      year: 1991,
      tooltip: "A device used to manufacture objects by depositing material in successive layers according to a prescribed pattern or model",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/3D_printing#Printers"
    },
    {
      label: "SSD",
      year: 1991,
      tooltip: "SanDisk Corporation (then SunDisk) shipped the first SSD, a 20 MB solid state drive which sold OEM for around $1,000. It was used by IBM in a ThinkPad laptop.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/SSD"
    },
    {
      label: "Linux",
      year: 1991,
      tooltip: "In 1991, while attending the University of Helsinki, Torvalds became curious about operating systems.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Linux"
    },
    {
      label: "Cybercrime",
      year: 1991,
      tooltip: "Criminal activity committed using a computer especially to illegally access, transmit, or manipulate data",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Cybercrime"
    },
    {
      label: "SMS",
      year: 1991,
      tooltip: "A technology for sending short text message.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/sms"
    },
    {
      label: "Home page",
      year: 1992,
      tooltip: "The page typically encountered first on a website that usually contains links to the other pages of the site",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Home_page"
    },
    {
      label: "HTML",
      year: 1992,
      tooltip: "A markup language that is used to create documents on the World Wide Web incorporating text, graphics, sound, video, and hyperlinks.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/HTML"
    },
    {
      label: "Portal",
      year: 1992,
      tooltip: "As intranets quickly grew more complex, the concept of intranet portal was born.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Captive_portal"
    },
    {
      label: "url",
      year: 1992,
      tooltip: "The address of a resource on the Internet that consists of a communications protocol followed by the name or address of a computer on the network.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/URL"
    },
    {
      label: "Augmented Reality",
      year: 1992,
      tooltip: "An enhanced version of reality created by the use of technology to overlay digital information on an image of something being viewed through a device.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Augmented_reality"
    },
    {
      label: "PDF",
      year: 1992,
      tooltip: "A computer file format for the transmission of a multimedia document that is not intended to be edited further and appears unaltered in most computer environments.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/PDF"
    },
    {
      label: "Generation Y",
      year: 1992,
      tooltip: "The generation of Americans born in the 1980s and 1990s.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Millennials"
    },
    {
      label: "Banner Ad",
      year: 1993,
      tooltip: "The first clickable web ad was sold by Global Network Navigator in 1993 to a Silicon Valley law firm.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Web_banner"
    },
    {
      label: "Bookmark",
      year: 1993,
      tooltip: "Bookmarks have been incorporated in browsers since the Mosaic browser in 1993",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/bookmark"
    },
    {
      label: "E-commerce",
      year: 1993,
      tooltip: "Commerce conducted via the Internet",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/e-commerce"
    },
    {
      label: "Email",
      year: 1993,
      tooltip: "Historically, the term electronic mail was used generically for any electronic document transmission.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/email"
    },
    {
      label: "Botnet",
      year: 1993,
      tooltip: "A botnet is a logical collection of internet-connected devices such as computers, smartphones or IoT devices whose security has been breached and control ceded to a third party.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Botnet"
    },
    {
      label: "Meme",
      year: 1993,
      tooltip: "The word meme was coined by Richard Dawkins in his 1976 book The Selfish Gene as an attempt to explain the way cultural information spreads.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Meme"
    },
    {
      label: "Scraping",
      year: 1993,
      tooltip: "Data scraping is a technique in which a computer program extracts data from human-readable output coming from another program.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Scraping"
    },
    {
      label: "Streaming",
      year: 1993,
      tooltip: "First time was at Xerox PARC while elsewhere in the building, scientists were discussing new technology for broadcasting on the Internet using multicasting.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Streaming"
    },
    {
      label: "Webmail",
      year: 1993,
      tooltip: "The first Web Mail implementation was developed at CERN in 1993 by Phillip Hallam-Baker as a test of the HTTP protocol stack.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Webmail"
    },
    {
      label: "Webmaster",
      year: 1993,
      tooltip: "A person responsible for the creation or maintenance of a website especially for a company or organization.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Webmaster"
    },
    {
      label: "Website",
      year: 1993,
      tooltip: "On 30 April 1993, CERN announced that the World Wide Web would be free to use for anyone.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Website"
    },
    {
      label: "Keylogger",
      year: 1993,
      tooltip: "A piece of software that records the signals sent from a keyboard to a computer usually for the purpose of gaining information about the user without the user's knowledge.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/keylogger"
    },
    {
      label: "Log in",
      year: 1993,
      tooltip: "The noun login comes from the verb (to) log in, and by analogy with the verb to clock in.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/login"
    },
    {
      label: "Tab",
      year: 1993,
      tooltip: "Microsoft Word in 1993 used them to simplify submenus.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/tab_key"
    },
    {
      label: "Astroturfing",
      year: 1993,
      tooltip: "Organized activity that is intended to create a false impression of a widespread, spontaneously arising, grassroots movement in support of or in opposition to something.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/astroturfing"
    },
    {
      label: "moe",
      year: 1993,
      tooltip: "Japanese slang loanword that refers to feelings of strong affection mainly towards characters in anime, manga, video games, and other media directed at the otaku market.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/moe"
    },
    {
      label: "adsl",
      year: 1993,
      tooltip: "A data communications technology that enables faster data transmission over copper telephone lines than a conventional voiceband modem can provide.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/adsl"
    },
    {
      label: "Cookie",
      year: 1994,
      tooltip: "The term was derived from the term \"magic cookie\", which is a packet of data a program receives and sends back unchanged, used by Unix programmers.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/cookie"
    },
    {
      label: "CSS",
      year: 1994,
      tooltip: "Cascading Style Sheets wasn't the only proposed style language at the time.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/css"
    },
    {
      label: "HTTPS",
      year: 1994,
      tooltip: "Historically, HTTPS connections were primarily used for payment transactions on the World Wide Web, e-mail and for sensitive transactions in corporate information systems.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/https"
    },
    {
      label: "Media Queries",
      year: 1994,
      tooltip: "A media query consists of a media type and one or more expressions, involving media features, which resolve to either true or false.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/media_queries"
    },
    {
      label: "PHP",
      year: 1994,
      tooltip: "PHP development began in 1994 when Rasmus Lerdorf wrote several Common Gateway Interface programs in C, which he used to maintain his personal homepage.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/php"
    },
    {
      label: "URI",
      year: 1994,
      tooltip: "In 1994, Tim Berners-Lee's proposals for hypertext implicitly introduced the idea of a URL as a short string representing a resource that is the target of a hyperlink.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/uri"
    },
    {
      label: "W3C",
      year: 1994,
      tooltip: "The World Wide Web Consortium (W3C) is the main international standards organization for the World Wide Web (abbreviated WWW or W3).",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/W3c"
    },
    {
      label: "Compact flash",
      year: 1994,
      tooltip: "Flash memory mass storage device used mainly in portable electronic devices. The format was specified and the devices were first manufactured by SanDisk in 1994",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Web"
    },
    {
      label: "Webcam",
      year: 1994,
      tooltip: "A camera used in transmitting live images over the World Wide Web",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Webcam"
    },
    {
      label: "C#",
      year: 1994,
      tooltip: "Hejlsberg is C#'s principal designer and lead architect at Microsoft, and was previously involved with the design of Turbo Pascal, Embarcadero Delphi, and Visual J++.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
    },
    {
      label: "QR code",
      year: 1994,
      tooltip: "The QR code system was invented in 1994 by the Japanese company Denso Wave. Its purpose was to track vehicles during manufacturing.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/QR_code"
    },
    {
      label: "MP3",
      year: 1994,
      tooltip: "A computer file format for the compression and storage of digital audio data.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/mp3"
    },
    {
      label: "Webzine",
      year: 1994,
      tooltip: "A publication usually in magazine format that exists solely on the World Wide Web.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/webzine"
    },
    {
      label: "Spyware",
      year: 1994,
      tooltip: "Software that is installed in a computer without the user's knowledge and transmits information about the user's computer activities over the Internet.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/spyware"
    },
    {
      label: "Extranet",
      year: 1995,
      tooltip: "A network (as of a company) similar to an intranet that also allows access by certain others.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/etranet"
    },
    {
      label: "Javascript",
      year: 1995,
      tooltip: "It was developed under the name Mocha, the language was officially called LiveScript when it first shipped in beta releases of Netscape Navigator 2.0 in September 1995.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/javascript"
    },
    {
      label: "Spoofing",
      year: 1995,
      tooltip: "Spoofing attack is a situation in which a person or program successfully masquerades as another by falsifying data, to gain an illegitimate advantage.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/spoofing"
    },
    {
      label: "SSH",
      year: 1995,
      tooltip: "Ylönen founded SSH Communications Security to market and develop SSH. It was estimated that by the year 2000 the number of users had grown to 2 million.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/ssh"
    },
    {
      label: "Wiki",
      year: 1995,
      tooltip: "A website that allows visitors to make changes, contributions, or corrections",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/wiki"
    },
    {
      label: "Antispam",
      year: 1995,
      tooltip: "Most techniques have both kinds of serious errors, to varying degrees, their systems may use techniques that have a high false negative rate, in order to reduce the number of false positives.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/antispam"
    },
    {
      label: "Chatiquette",
      year: 1995,
      tooltip: "The term chatiquette is a variation of netiquette (Internet etiquette) and describes basic rules of online communication.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Etiquette_in_technology#Netiquette"
    },
    {
      label: "Extranet",
      year: 1995,
      tooltip: "A network (as of a company) similar to an intranet that also allows access by certain others, such as customers or suppliers.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/extranet"
    },
    {
      label: "ActiveX",
      year: 1996,
      tooltip: "ActiveX is a software framework created by Microsoft that adapts its earlier Component Object Model and Object Linking and Embedding technologies for content downloaded from a network.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Web"
    },
    {
      label: "Big data",
      year: 1996,
      tooltip: "An accumulation of data that is too large and complex for processing by traditional database management tools.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/big_data"
    },
    {
      label: "CIFS",
      year: 1996,
      tooltip: "In 1996, when Sun Microsystems announced WebNFS, Microsoft launched an initiative to rename SMB to Common Internet File System (CIFS) and added more features.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/cifs"
    },
    {
      label: "Cloud",
      year: 1996,
      tooltip: "References to the phrase \"cloud computing\" appeared as early as 1996, with the first known mention in a Compaq internal document.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/cloud"
    },
    {
      label: "Dynamic website",
      year: 1996,
      tooltip: "Execusite introduced the first dynamic website solution for the professional marketplace in June 1997.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Dynamic_web_page"
    },
    {
      label: "Phishing",
      year: 1996,
      tooltip: "A scam by which an Internet user is duped (as by a deceptive e-mail message) into revealing personal or confidential information which the scammer can use illicitly.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/phishing"
    },
    {
      label: "Servlet",
      year: 1996,
      tooltip: "A Servlet is an object that receives a request and generates a response based on that request.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/servlet"
    },
    {
      label: "XML",
      year: 1996,
      tooltip: "In computing, Extensible Markuo Language is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/xml"
    },
    {
      label: "smartphone",
      year: 1996,
      tooltip: "A cell phone that includes additional software functions (such as e-mail or an Internet browser).",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/smartphone"
    },
    {
      label: "Blog",
      year: 1997,
      tooltip: "The term \"weblog\" was coined by Jorn Barger[9] on 17 December 1997.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/blog"
    },
    {
      label: "Emoji",
      year: 1997,
      tooltip: "Any of various small images, symbols, or icons used in text fields in electronic communication to express the emotional attitude of the writer.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/emoji"
    },
    {
      label: "Slashdot",
      year: 1997,
      tooltip: "Social news website that originally billed itself as \"News for Nerds. Stuff that Matters\".",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/slashdot"
    },
    {
      label: "Metadata Tag",
      year: 1997,
      tooltip: "In information systems, a tag is a keyword or term assigned to a piece of information. This kind of metadata helps describe an item and allows it to be found again by browsing or searching.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/metadata_tag"
    },
    {
      label: "Frame",
      year: 1997,
      tooltip: "First introduced by Microsoft Internet Explorer in 1997, standardized in HTML 4.0 Transitional, allowed in HTML5.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/frame"
    },
    {
      label: "Cyberbullying",
      year: 1998,
      tooltip: "The electronic posting of mean-spirited messages about a person (such as a student) often done anonymously",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/cyberbullying"
    },
    {
      label: "Cybersquatter",
      year: 1998,
      tooltip: "Some countries have specific laws against cybersquatting beyond the normal rules of trademark law. The United States, has the U.S. Anticybersquatting Consumer Protection Act of 1999.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/cybersquatting"
    },
    {
      label: "Netiquette",
      year: 1998,
      tooltip: "Online etiquette is ingrained into culture, although etiquette in technology is a fairly recent concept.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/netiquette"
    },
    {
      label: "SOAP",
      year: 1998,
      tooltip: "SOAP was designed as an object-access protocol by Dave Winer, Don Box, Bob Atkinson, and Mohsen Al-Ghosein for Microsoft, where Atkinson and Al-Ghosein were working.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/soap"
    },
    {
      label: "Social networking",
      year: 1998,
      tooltip: "The creation and maintenance of personal and business relationships especially online.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/social_network"
    },
    {
      label: "Zigbee",
      year: 1998,
      tooltip: "The technology defined by the Zigbee specification is intended to be simpler and less expensive than other wireless personal area networks.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/zigbee"
    },
    {
      label: "P2P",
      year: 1999,
      tooltip: "Tim Berners-Lee's vision for the World Wide Web was close to a P2P network.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/p2p"
    },
    {
      label: "Web 2.0",
      year: 1999,
      tooltip: "The term was invented by Darcy DiNucci in 1999 and popularized several years later by Tim O'Reilly and Dale Dougherty at the O'Reilly Media Web 2.0 Conference in late 2004.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Web_2.0"
    },
    {
      label: "Web application",
      year: 1999,
      tooltip: "In earlier computing models like client–server, the processing load for the application was shared between code on the server and code installed on each client locally.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Web_application"
    },
    {
      label: "Firewire",
      year: 1999,
      tooltip: "Apple first included on-board FireWire in some of its 1999 Macintosh models, and most Apple Macintosh computers manufactured in the years 2000 through 2011 included FireWire ports.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/firewire"
    },
    {
      label: "Extension",
      year: 1999,
      tooltip: "A browser-extension is a plug-in that extends the functionality of a web browser. Some extensions are authored using web technologies such as HTML, JavaScript, and CSS.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/extension"
    },
    {
      label: "Wifi",
      year: 1999,
      tooltip: "The first version of the 802.11 protocol was released in 1997 and provided up to 2 Mbit/s link speeds.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/wifi"
    },
    {
      label: "Hackathon",
      year: 1999,
      tooltip: "OpenBSD's apparent first use of the term referred to a cryptographic development event held in Calgary on June 4, 1999.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/hackathon"
    },
    {
      label: "pop-up",
      year: 1999,
      tooltip: "A menu in a graphical user interface (GUI) that appears upon user interaction, such as a right-click mouse operation.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/pop_up"
    },
    {
      label: "3G",
      year: 2000,
      tooltip: "3G Technology provides an information transfer rate of at least 200 kbit/s.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/3G"
    },
    {
      label: "Google",
      year: 2000,
      tooltip: "The first use of \"Google\" as a verb in pop culture happened on the TV series Buffy the Vampire Slayer, in 2002.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/google"
    },
    {
      label: "Permalink",
      year: 2000,
      tooltip: "In the early years of the web, all content was static, and thus all hyperlinks pointed at a filename.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/permalink"
    },
    {
      label: "Networking",
      year: 2000,
      tooltip: "In the 2000s, \"networking\" has expanded beyond its roots as a business practice to the point that parents meeting to share child-rearing tips.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/networking"
    },
    {
      label: "BitTorrent",
      year: 2001,
      tooltip: "BitTorrent is a communication protocol for peer-to-peer file sharing (P2P) which is used to distribute data and electronic files over the Internet.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/bit_torrent"
    },
    {
      label: "Captcha",
      year: 2001,
      tooltip: "A test to prevent spamming software from accessing a website by requiring visitors to the site to solve a simple puzzle in order to gain access.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/captcha"
    },
    {
      label: "Favicon",
      year: 2001,
      tooltip: "A small icon associated with a particular website or page that is displayed in an Internet browser.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/favicon"
    },
    {
      label: "Splinternet",
      year: 2001,
      tooltip: "Describing the splintering of Internet technology, some writers see the problem in terms of new devices using different standards.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/splinternet"
    },
    {
      label: "Linkedin",
      year: 2002,
      tooltip: "The company was founded in December 2002 by Reid Hoffman and founding team members from PayPal and Socialnet.com .",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/linkedin"
    },
    {
      label: "Moodle",
      year: 2002,
      tooltip: "Originally developed by Martin Dougiamas to help educators create online courses with a focus on interaction and collaborative construction of content, and it is in continual evolution.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/moodle"
    },
    {
      label: "Trackback",
      year: 2002,
      tooltip: "A trackback is an acknowledgment. This acknowledgment is sent via a network signal from the originating site to the receiving site.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/trackback"
    },
    {
      label: "Vlog",
      year: 2002,
      tooltip: "A blog that contains video material.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/vlog"
    },
    {
      label: "Selfie",
      year: 2002,
      tooltip: "An image of oneself taken by oneself using a digital camera especially for posting on social networks.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/selfie"
    },
    {
      label: "darknet",
      year: 2002,
      tooltip: "The term gained public acceptance following publication of \"The Darknet and the Future of Content Distribution\", a 2002 by employees of Microsoft.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/darknet"
    },
    {
      label: "Selfie",
      year: 2002,
      tooltip: "An image of oneself taken by oneself using a digital camera especially for posting on social networks.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/selfie"
    },
    {
      label: "Wordpress",
      year: 2003,
      tooltip: "In 2004 the licensing terms for the competing Movable Type package were changed by Six Apart, resulting in many of its most influential users migrating to WordPress.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/wordpress"
    },
    {
      label: "Flarf",
      year: 2003,
      tooltip: "One of their central methods, was to mine the Internet with odd search terms then distill the results into often hilarious and sometimes disturbing poems, plays and other texts.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/flaf"
    },
    {
      label: "Facebook",
      year: 2004,
      tooltip: "Zuckerberg wrote a program called \"Facemash\" in 2003 while attending Harvard University as a sophomore.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/facebook"
    },
    {
      label: "Ubuntu",
      year: 2004,
      tooltip: "Ubuntu is named after the Southern African philosophy of ubuntu, which Canonical suggests can be loosely translated as \"humanity to others\" or \"I am what I am because of who we all are\".",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/ubuntu"
    },
    {
      label: "Podcast",
      year: 2004,
      tooltip: "A program (as of music or talk) made available in digital format for automatic download over the Internet.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/podcast"
    },
    {
      label: "Fomo",
      year: 2004,
      tooltip: "A pervasive apprehension that others might be having rewarding experiences from which one is absent.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/fomo"
    },
    {
      label: "Loot box",
      year: 2004,
      tooltip: "In video games, a loot box is a consumable virtual item which can be redeemed to receive a randomized selection of further virtual items.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/loot_box"
    },
    {
      label: "Ajax",
      year: 2005,
      tooltip: "The term Ajax was publicly used on 18 February 2005 by Jesse James Garrett in an article titled Ajax: A New Approach to Web Applications, based on techniques used on Google pages.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/ajax"
    },
    {
      label: "Microblogging",
      year: 2005,
      tooltip: "Blogging done with severe space or size constraints typically by posting frequent brief messages about personal activities.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/microblogging"
    },
    {
      label: "Pharming",
      year: 2005,
      tooltip: "Neologism based on the words \"farming\" and \"phishing\". Phishing is a type of social-engineering attack to obtain access credentials, such as user names and passwords.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/pharming"
    },
    {
      label: "Site map",
      year: 2005,
      tooltip: "Google introduced the Sitemaps protocol so web developers can publish lists of links from across their sites.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/site_map"
    },
    {
      label: "Beta Software",
      year: 2005,
      tooltip: "As the Internet has facilitated rapid and inexpensive distribution of software, companies have begun to take a looser approach to use of the word \"beta\".",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/beta_software"
    },
    {
      label: "Dashboard",
      year: 2005,
      tooltip: "Dashboard was first introduced in Mac OS X 10.4 Tiger. It can be activated as an application, from the Dock, Launchpad or Spotlight. It can also be accessed by a dashboard key.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/dashboard"
    },
    {
      label: "Followership",
      year: 2005,
      tooltip: "Followership is the actions of someone in a subordinate role.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/follower"
    },
    {
      label: "jQuery",
      year: 2006,
      tooltip: "jQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/jquery"
    },
    {
      label: "Smishing",
      year: 2006,
      tooltip: "In computing, SMS phishing or smishing is a form of criminal activity using social engineering techniques.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/smishing"
    },
    {
      label: "CrowdFunding",
      year: 2006,
      tooltip: "The practice of obtaining needed funding (as for a new business) by soliciting contributions from a large number of people especially from the online community",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/crowdfunding"
    },
    {
      label: "Algocracy",
      year: 2006,
      tooltip: "A. Aneesh is the author of Virtual Migration who put forward the concept of \"algocracy\" now widely used to convey the growing importance and threat of algorithms in social life.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-soixante-et-un-moe-algocracy-neuralism-angewandte"
    },
    {
      label: "Hashtag",
      year: 2007,
      tooltip: "A word or phrase preceded by the symbol # that classifies or categorizes the accompanying text, such as a tweet.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/hashtag"
    },
    {
      label: "HTML5",
      year: 2007,
      tooltip: "Its goals are to improve the language with support for the latest multimedia and other new features.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/html5"
    },
    {
      label: "Webhook",
      year: 2007,
      tooltip: "A webhook in web development is a method of augmenting or altering the behaviour of a web page, or web application, with custom callbacks.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Webhook"
    },
    {
      label: "Wordart",
      year: 2007,
      tooltip: "Wordart allows users to create stylized text with various \"special effects\" such as textures, outlines, and many other manipulations that are not available through the standard font formatting.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Wordart"
    },
    {
      label: "Farecasting",
      year: 2007,
      tooltip: "Predicting the ideal moment to buy a plane ticket has long been the holy grail of travel planning.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/farecasting"
    },
    {
      label: "Spoiler",
      year: 2007,
      tooltip: "The term spoiler was introduced in the early days of the Internet, and came to prominence in newsgroup conversations.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/spoiler"
    },
    {
      label: "Bitcoins",
      year: 2008,
      tooltip: "In November 2008, a link to a paper authored by Satoshi Nakamoto titled Bitcoin: A Peer-to-Peer Electronic Cash System[5] was posted to a cryptography mailing list.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/bitcoins"
    },
    {
      label: "Nomophobia",
      year: 2008,
      tooltip: "Fear of being without access to a working cell phone.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Nomophobia"
    },
    {
      label: "Pinterest",
      year: 2009,
      tooltip: "Pinterest CEO Ben Silbermann summarized the company as a \"catalogue of ideas\" that inspires users to \"go out and do that thing\", rather than as an image-based social network.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/pinterest"
    },
    {
      label: "CashTag",
      year: 2009,
      tooltip: "StockTwits used ticker symbols preceded by the dollar sign to create \"cashtags\".",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/cashtag"
    },
    {
      label: "Instagram",
      year: 2010,
      tooltip: "To post (a picture) to the Instagram photo-sharing service",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/instagram"
    },
    {
      label: "Responsive",
      year: 2010,
      tooltip: "The first site to feature a layout that adapts to browser viewport width was Audi.com launched in late 2001.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Responsive_web_design"
    },
    {
      label: "Gamification",
      year: 2010,
      tooltip: "The process of adding games or gamelike elements to something (such as a task) so as to encourage participation.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/gamification"
    },
    {
      label: "Kaggler",
      year: 2010,
      tooltip: "World's largest community of data scientists and machine learners, owned by Google, Inc.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/kaggle"
    },
    {
      label: "Vaporwave",
      year: 2010,
      tooltip: "Vaporwave is an Internet-based microgenre that was built upon the experimental and ironic tendencies of genres such as chillwave and hypnagogic pop.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/vaporwave"
    },
    {
      label: "iCloud",
      year: 2011,
      tooltip: "It replaced Apple's MobileMe service, acting as a data syncing center for email, contacts, calendars, bookmarks, notes, reminders, iWork documents, photos and other data.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/icloud"
    },
    {
      label: "Defriend",
      year: 2011,
      tooltip: "The first scholarly definition and examination of friending and defriending was David Fono and Kate Raynes-Goldie's \"Hyperfriendship and beyontooltip: Friends and Social Norms on LiveJournal\".",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Internet_relationship"
    },
    {
      label: "Chromebook",
      year: 2011,
      tooltip: "The devices are primarily used to perform a variety of tasks using the Google Chrome browser, with most applications and data residing in the cloud rather than on the machine itself.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/chromebook"
    },
    {
      label: "Snapchat",
      year: 2011,
      tooltip: "One exception was the decision to keep a mascot designed by Brown, \"Ghostface Chillah\", named after Ghostface Killah of the hip-hop group Wu-Tang Clan.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/snapchat"
    },
    {
      label: "Blockchain",
      year: 2011,
      tooltip: "A digital database containing information (such as records of financial transactions) that can be simultaneously used and shared within a large decentralized, publicly accessible network.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/blockchain"
    },
    {
      label: "Geeker",
      year: 2011,
      tooltip: "The word geek is a slang term originally used to describe eccentric or non-mainstream people.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/geeker"
    },
    {
      label: "Troll",
      year: 2012,
      tooltip: "ApplicaSome readers may characterize a post as trolling, while others may regard the same post as a legitimate contribution to the discussion, even if controversial.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/troll"
    },
    {
      label: "Heartbleed",
      year: 2012,
      tooltip: "Heartbleed is a security bug in the OpenSSL cryptography library, which is a widely used implementation of the Transport Layer Security protocol.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/heartbleed"
    },
    {
      label: "4G",
      year: 2013,
      tooltip: "4G provides mobile broadband Internet access, for example to laptops with wireless modems, to smartphones, and to other mobile devices.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/4G"
    },
    {
      label: "Trickjumping",
      year: 2015,
      tooltip: "Movement mode in First Person Shooter Games (FPS) which involves agile movement using the game's physics engine.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Slacktivism#Clicktivism"
    },
    {
      label: "Clicktivism",
      year: 2015,
      tooltip: "Referring to engaging volunteer participants via online platforms and social networks.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-trente-cinq-lift16-technologie-x-magie-1983-et-un-mardi-gras-cajun"
    },
    {
      label: "Lonely Web",
      year: 2015,
      tooltip: "Word refers to those web contents which, despite their public nature and the fact that they are indexed by the search engines, are nonetheless very limited in their readership.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-trente-deux-kicksnark-circulations-high-tech-pirate-book-et-clairage-pour-selfie"
    },
    {
      label: "Skreaming",
      year: 2015,
      tooltip: "Corresponds to this grueling practice involving having to speak very loudly in a meeting to make itself heard by a participant participating remotely via audio / videoconference.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-trente-deux-kicksnark-circulations-high-tech-pirate-book-et-clairage-pour-selfie"
    },
    {
      label: "Kicksnark",
      year: 2015,
      tooltip: "Verb describing the action of supporting a project by subscription while hoping / knowing that it will not reach its objective of fundraising.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-trente-deux-kicksnark-circulations-high-tech-pirate-book-et-clairage-pour-selfie"
    },
    {
      label: "Poseurmoji",
      year: 2015,
      tooltip: "Emoji announced with fanfare as new and original while it is not included in the certifications of the Unicode Consortium and therefore unusable.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-trente-et-un-poseurmoji-mes-ami-bots-et-des-topographies-tristounettes"
    },
    {
      label: "Phubbing",
      year: 2015,
      tooltip: "Term coined as part of a campaign by Macquarie Dictionary to describe the habit of snubbing someone in favour of a mobile phone.",
      target: "_blank",
      url: "https://en.wikipedia.org/wiki/Phubbing"
    },
    {
      label: "Brouteurs",
      year: 2015,
      tooltip: "Idiom used in Ivory Coast to designate crooks acting with information and communication technologies.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-vingt-huit-maskenfreiheit-des-mturks-pour-d-crypter-les-glitchs-et-le-tsundoku-actuel"
    },
    {
      label: "Plogging",
      year: 2015,
      tooltip: "Transposition of the logic of (web) logging to the platforms of social networks like Facebook, Twitter, etc.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-vingt-sept-die-zykluserkennungssoftware-des-boulots-sous-l-api-et-des-choses-sur-l-importance-des-algorithmes"
    },
    {
      label: "Speakularity",
      year: 2015,
      tooltip: "Term proposed by journalist Matt Thompson that refers to the transition to a society in which \"the default expectation for recorded speech will be searchable and readable, nearly in the moment.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-vingt-six-sega-core-dadabots-si-ge-et-algorithmes-le-glitch-du-virage-du-tour-de-france"
    },
    {
      label: "Stratocaching",
      year: 2015,
      tooltip: "Evolution of the concept of geocaching, the principle rests on the idea of ​​finding flying objects fallen on the grountooltip: balloons, flying capsules, etc.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-vingt-six-sega-core-dadabots-si-ge-et-algorithmes-le-glitch-du-virage-du-tour-de-france"
    },
    {
      label: "Spoti-stalker",
      year: 2015,
      tooltip: "Term for voyeurs on Spotify, who play songs that are similar to your playlist.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-vingt-quatre-pk-pagers-ipod-touch-et-feature-phones-lee-scratch-perry"
    },
    {
      label: "Belfie",
      year: 2017,
      tooltip: "A 'bottom selfie' - a photographic self-portrait featuring the buttocks, usually posted by female celebrities on social media networks.",
      target: "_blank",
      url: "https://www.urbandictionary.com/define.php?term=belfie"
    },
    {
      label: "Flop account",
      year: 2017,
      tooltip: "An account usually found on instagram typically made fandom based to make fun of and demean what they call \"flops\" and things they find embarassing .",
      target: "_blank",
      url: "https://www.urbandictionary.com/define.php?term=flop%20account"
    },
    {
      label: "Neurealism",
      year: 2018,
      tooltip: "A nice label for post-uncanny neural art.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-soixante-et-un-moe-algocracy-neuralism-angewandte"
    },
    {
      label: "GANism",
      year: 2018,
      tooltip: "Overfitting a neural-net to generating tiny ugly images, that are then sold with the \"made by a creative AI.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-soixante-et-un-moe-algocracy-neuralism-angewandte"
    },
    {
      label: "Toad",
      year: 2018,
      tooltip: "A topic trending on Twitter and I want to look it up and find out what the conversation is all about, but oh no, I really didn't want to learn that.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-soixante-flarf-bmaas-le-youtube-et-un-manuscrit-de-th-se"
    },
    {
      label: "Halfseen",
      year: 2018,
      tooltip: "Reading (the beginning of) a message without opening it.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-soixante-flarf-bmaas-le-youtube-et-un-manuscrit-de-th-se"
    },
    {
      label: "Patadata",
      year: 2018,
      tooltip: "A pataphysical version of meta-data, which allows potentiel new forms of information foraging, through facetious analogy-based reasoning.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-huit-patadata-chi-fi-balenciagai-mobile-repair-cultures-talks"
    },
    {
      label: "Shadowbanning",
      year: 2018,
      tooltip: "The act of blocking a user or their content from an online community such that it will not be readily apparent to the user that they have been banned.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-huit-patadata-chi-fi-balenciagai-mobile-repair-cultures-talks"
    },
    {
      label: "Snowbot",
      year: 2018,
      tooltip: "Nickname used for telepresence robots used for video-conferencing.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-huit-patadata-chi-fi-balenciagai-mobile-repair-cultures-talks"
    },
    {
      label: "Congotronics",
      year: 2018,
      tooltip: "A term used to described a compilation, which assemble traditional trance music and heavily-distorted sounds generated by DIY amplification of their instruments.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-sept-jingfen-congotronics-bergen"
    },
    {
      label: "Wiki-hounding",
      year: 2018,
      tooltip: "A form of online stalking that is based on the singling out of one or more editors, joining discussions on multiple pages or topics.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-sept-jingfen-congotronics-bergen"
    },
    {
      label: "Hanmoji",
      year: 2018,
      tooltip: "using emoji to represent Chinese characters.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-sept-jingfen-congotronics-bergen"
    },
    {
      label: "Investidating",
      year: 2018,
      tooltip: "scouring photos for a conversation starter on Tinder.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-six-hanmoji-computationalism"
    },
    {
      label: "Computationalism",
      year: 2018,
      tooltip: "the exaltation of computational systems specifically to manage, replicate, analyze and replace human systems of knowledge.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-six-hanmoji-computationalism"
    },
    {
      label: "Orphic media",
      year: 2018,
      tooltip: "Media devices that allow individuals to control and customize their sonic environment.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-cinq-orphic-media-ai-ia-slow-tv-artificial-unintelligence"
    },
    {
      label: "Finsta",
      year: 2018,
      tooltip: "A spam Instagram account where people post what they are too afraid to post on the real account: ugly selfies, weird memes, private jokes.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-cinq-orphic-media-ai-ia-slow-tv-artificial-unintelligence"
    },
    {
      label: "Code smell",
      year: 2018,
      tooltip: "any symptom in the source code of a program that possibly indicates a deeper problem.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-cinq-orphic-media-ai-ia-slow-tv-artificial-unintelligence"
    },
    {
      label: "Algotorial",
      year: 2018,
      tooltip: "A combination of the words “algorithm” and “editorial”, where data-generated recommendations are combined with the human curation of music experts",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-quatre-alexa-voice-dungeon-synth-et-tsundokus-num-rique"
    },
    {
      label: "Iron Bubble",
      year: 2018,
      tooltip: "Neologism reflecting the ideological isolation caused by filtering algorithms on social networks, which can potentially leave users in a bubble.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-trois-streitkultur-carbone-soft-architecture-machines"
    },
    {
      label: "Switcheroo",
      year: 2018,
      tooltip: "term used by users trying to trick supermarket cash registers, the principle being based on peeling off a sticker barcode of a cheaper product and placing it on the desired one.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-et-un-fauxtomation-interaction-18-carnaval-et-rituels-num-riques"
    },
    {
      label: "Podfaster",
      year: 2018,
      tooltip: "Neologism that refers to people listening to podcasts in accelerated speed.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-podfasting-adversarial-patches-outils-bricol-s-en-prison-futu"
    },
    {
      label: "Loot box",
      year: 2018,
      tooltip: "Virtual object that contains one or more virtual objects, giving new abilities to video game participants.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-cinquante-podfasting-adversarial-patches-outils-bricol-s-en-prison-futu"
    },
    {
      label: "Mutual",
      year: 2017,
      tooltip: "Transposition of the term \"mutual friends / contacts\", which by extension refers to the portion of contacts on an online social network that follows each other.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-quarante-neuf-urks-e-waste-d-agbogbloshie-ethique-et-design"
    },
    {
      label: "Page parking",
      year: 2017,
      tooltip: "Tactical use of tabs in the web browser that consists of \"opening multiple pages in rapid-fire succession\".",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-quarante-huit-quantpreneurs-page-parking-le-num-rique-des-catalogues-ikea-et-des-bots-copieurs"
    },
    {
      label: "Memewear",
      year: 2017,
      tooltip: "The tangible detritus of a very popular, very temporary joke.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-quarante-sept-foaflore-moud-rateur-un-cablier-de-nokia-au-cap-vert-et-des-bouilloires-mod-lis-es"
    },
    {
      label: "Computational Propaganda",
      year: 2017,
      tooltip: "Term used to refer to the automation of the production and propagation of partial or erroneous messages and information.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-quarante-six-leijiverse-chungking-mansions-et-une-requ-te-sur-le-basicois"
    },
    {
      label: "One-up",
      year: 2017,
      tooltip: "Synonymous with \"extra life\" in video games, and which lesser known is a legacy of the 1960s pinball machines.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-quarante-six-leijiverse-chungking-mansions-et-une-requ-te-sur-le-basicois"
    },
    {
      label: "Nosetap",
      year: 2017,
      tooltip: "Neologism corresponding to the use of his nose to interact with the screen of a touch screen.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/lagniappe-quarante-six-leijiverse-chungking-mansions-et-une-requ-te-sur-le-basicois"
    },
    {
      label: "Pogosticking",
      year: 2017,
      tooltip: "The fact of being sent back to the beginning of a page / list after scrolling down, left the page, and pressed the \"back\" button.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-quarante-cinq-soeurveillance-pogosticking-et-un-plafond-mysterieux"
    },
    {
      label: "Brogrammer",
      year: 2017,
      tooltip: "Suitcase word (\"bro\" and \"programmer\") formed to describe macho programmers.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-quarante-cinq-soeurveillance-pogosticking-et-un-plafond-mysterieux"
    },
    {
      label: "Swayze effect",
      year: 2017,
      tooltip: "Common phenomenon when using a virtual reality headset (VR), which is to feel a lack of tangible link with the nearby environment with, while having a sense of presence.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-quarante-quatre-mukbang-emoji-de-combat-m-diarch-ologie-et-patrick-swayze"
    },
    {
      label: "Puppy syndrome",
      year: 2017,
      tooltip: "Trend of forms recognition programs, trained with machine learning technologies, to identify dogs in all kinds of images.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-quarante-deux-puppy-syndrome-histoires-de-fant-mes-vr-alt-ai"
    },
    {
      label: "Telepresenty",
      year: 2017,
      tooltip: "Adjective denoting the somewhat factitious character of a social situation, as if it suffered from bugs.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-quarante-deux-puppy-syndrome-histoires-de-fant-mes-vr-alt-ai"
    },
    {
      label: "DIFM",
      year: 2017,
      tooltip: "Acronym for \"Do It For Me\" and which refers to the frenzy of applications or services supposed to automate the delegation of tasks considered as forbidding by the user.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-quarante-et-un-difm-nest-des-films-ruin-s-par-le-mobile-triennale-di-milano"
    },
    {
      label: "Wiki gnome",
      year: 2017,
      tooltip: "Wiki users whose humility leads them to not trumpet at all goes the amount of contributions they make on the Wikipedia.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-quarante-et-un-difm-nest-des-films-ruin-s-par-le-mobile-triennale-di-milano"
    },
    {
      label: "Name-fagging",
      year: 2017,
      tooltip: "Pejorative expression used to describe the excessive publication of information about his nickname during hacksand other incidents online.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-trente-neuf-pp-r-t-reverie-partie-2-big-now"
    },
    {
      label: "Sodcasting",
      year: 2017,
      tooltip: "Act of playing music through the speaker on a mobile phone, usually on public transport.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-trente-huit-toetsenbordschreeuwers-usages-et-m-susages-des-bots-le-retour-des-pigeons-bloggeurs"
    },
    {
      label: "Crapularity",
      year: 2016,
      tooltip: "Quantity of poor quality objects that could emerge from the combination of 3D printing technologies, spam and micro-payment.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-trente-sept-human-computation-observer-le-vite-obsol-te-et-d-placement-adaptation-extension-d-tournement"
    },
    {
      label: "Commentariat",
      year: 2016,
      tooltip: "Word-bag composed of the words \"commentary\" and \"proletariat\", and which refers to the class of journalists and media people.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-trente-sept-human-computation-observer-le-vite-obsol-te-et-d-placement-adaptation-extension-d-tournement"
    },
    {
      label: "Zooglers",
      year: 2016,
      tooltip: "This is when a person named Zoob comes up with a new word relating to Google.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-trente-sept-human-computation-observer-le-vite-obsol-te-et-d-placement-adaptation-extension-d-tournement"
    },
    {
      label: "Algorave",
      year: 2016,
      tooltip: "a form of rave that proposes to make people dance on loops programmed in real time (live coding) by the musicians in front of the public.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-trentre-six-iphone-favela-chic-et-du-rikimbili"
    },
    {
      label: "Wearapeuthics",
      year: 2016,
      tooltip: "Refers to portable technology products on the body intended to monitor the health of users and possibly provide care",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-trente-cinq-lift16-technologie-x-magie-1983-et-un-mardi-gras-cajun"
    },
    {
      label: "Microporn",
      year: 2016,
      tooltip: "Term used to describe pornographic video sequences presented as animated GIF.",
      target: "_blank",
      url: "https://tinyletter.com/nicolasnova/letters/livraison-trente-cinq-lift16-technologie-x-magie-1983-et-un-mardi-gras-cajun"
    }
  ];


  var settings = {
    entries: entries,
    width: 1600,
    height: 900,
    radius: "65%",
    radiusMin: 35,
    bgDraw: false,
    opacityOver: 1.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 150,
    speed: 0.2,

    fontFamily: "Oswald, Arial, sans-serif",
    fontSize: "18",
    fontColor: "#000",
    fontWeight: "normal", //bold
    fontStyle: "normal", //italic
    fontStretch: "expanded",
    fontToUpperCase: true,

    tooltipFontFamily: 'sans-serif',
    tooltipFontSize: '18',
    tooltipFontColor: 'black',
    tooltipFontWeight: 'normal', //bold
    tooltipFontStyle: 'normal', //italic
    tooltipFontStretch: 'normal',
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    // tooltipDiffX: -100,
    // tooltipDiffY: 0,

  };

  function makeSVG(tag, attrs) {
    var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs)
      el.setAttribute(k, attrs[k]);
    return el;
  }

  $('#container-project').svg3DTagCloud(settings, 'svgEE');


});
