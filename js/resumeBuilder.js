
var bio =
	{
	    "name": "Vince Voccia",
	    "role": "ECAD Applications Engineer",
	    "contacts": {
	        "mobile": "+561561561",
	        "email": "email@vvoccia.com",
	        "github": "vvoccia",
	        "blog": "",
	        "twitter": "@vsquared21",
	        "location": "Boca Raton, Florida, USA"
	    },
	    "WelcomeMsg": " A highly competent Senior Printed Circuit Board (PCB / FLEX) Designer and ECAD Tools Engineer with a diverse range of experience and expertise.",
	    "skills": [
			"Problem Solver",
			"Programmer",
			"Rigid/Flex Circuit Designer",
            "Design Automation",
			"Innovative",
			"Self Motivated"
	    ],
	    "bioPic": "images/man.png",
	    "display": function () {
	        var rh = resHelper;
	        rh.generateHTML(this, '#header', 'HTMLheader', 'prepend', ['role', 'name'], false);
	        rh.generateHTML(this.contacts, '#footerContacts', 'HTML', 'append', ['mobile','email', 'github', 'blog', 'twitter','location'], false);
	        rh.generateHTML(this, '#header', 'HTML', 'append', ['bioPic', 'WelcomeMsg'], false);
	        $('#header').append(window['HTMLskillsStart']);
	        rh.generateHTML(this.skills, '#skills', 'HTMLskills', 'append', [], false );
	    }
	};

var work =
	{
		jobs : [
			{
			    "employer": "MOTOROLA SOLUTIONS",
			    "title": "Senior PCB / FLEX Circuit Designer",
			    "location": "Plantation, Florida",
			    "dates": "2013 - Present",
			    "description": "Primary responsibilities include design of dense Ridged stacked HDI designs, and Flex circuits. <br> \
                                Developed a design re-use process to fabricate proto-types which allows multiple versions of a design or several different designs to be incorporated into one panel/array fully schematic driven and allows for one unified bill of material and placement data for factory builds. <br> \
                                Worked closely with mechanical team to develop a process to smoothly iterate the creation of flanged shield components. This included developing an Allegro Skill utility to build shield package symbols to library specifications on the fly in minutes and avoid waiting days or weeks for a librarian."
 
			},
            {
                "employer": "HARRIS CORPORATION. Government Communications Sector",
            	"title": "Senior PCB / FLEX Circuit Designer",
            	"location": "Palm Bay, Florida",
            	"dates": "2012 - 2013",
            	"description": "Designed highly electrically constrained printed circuit boards containing complex wiring rules per MIL-STD specifications up to 20 layers. Worked extensively with the Allegro Auto Router and GRE(Global Route Environment) Flow Manager within the Cadence tools."
            },
            {
                "employer": "MOTOROLA MOBILITY",
                "title": "Senior PCB and FLEX Circuit Designer / CAD Applications Engineer",
                "location": "Plantation, Florida",
                "dates": "2008 - 2012",
                "description": "<b>Design:</b> <br> \
                                Primary responsibilities include design of dense Ridged ELIC designs, Flex and Rigid Flex circuits. <br> \
                                Designed and developed process for Motorola Mobilitys first fully functional embedded component transceiver module with over 150 embedded components. <br> \
                                Utilized constraint managed design for Matched Groups, Differential Pairs and Impedance Control. <br> \
                                Utilized design partitioning for team design. <br> \
                                Developed module process for software test boards which allowed rapid turn-around on new transceiver spins. <br> <br>\
                                <b>CAD Tools Engineer:</b> <br> \
                                Responsible for managing the configuration and environment for all ECAD tools for Motorola Mobility World Wide. <br> \
                                Developed launch scripts and custom launch utilities for ECAD tools. <br> \
                                Developed customized software to automate and optimize the design process. <br> \
                                Provided Application support for all ECAD Tools. <br> \
                                Maintained and enhanced code for customized tools for cost models and PCB area estimation. <br> \
                                Responsible for evaluating and testing all new application software."
            },
            {
                "employer": "SIRIUS/XM SATELLITE RADIO",
                "title": "Senior Member Technical Staff",
                "location": "Deerfield Beach, Florida",
                "dates": "2002 - 2008",
                "description": "Design of Hi-Density, Multi-Layer, Surface Mount, Micro-Via, Digital, Analog, RF and Microwave circuits"
            },
            {
                "employer": "CADENCE DESIGN SYSTEMS",
                "title": "Pre Sales Application Engineer",
                "location": "San Jose, California",
                "dates": "2001 - 2002",
                "description": "Conducted demos, benchmarks and on-site customer support for high speed auto routing with complex topologies and routing constraints"
            },
            {
                "employer": "CISCO SYSTEMS",
                "title": "Hardware Engineer/Applications Engineer",
                "location": "Research Triangle Park, North Carolina",
                "dates": "1999 - 2001",
                "description": "Designed highly electrically constrained printed circuit boards containing complex wiring topologies with up to 30 layers. <br> \
                                Worked closely with Signal Integrity Engineer and Electrical Engineer to resolve routing and placement issues. <br> \
                                Developed complex auto routing scripts for batch processing. <br> \
                                Developed Allegro Skill program to do block replication of complex circuit placement. <br> \
                                Wrote custom translator to import legacy CAD ASCII data and generate an Allegro board file to be used by Signal Integrity Engineer <br> \
                                to allow board to board simulation of new and old designs within in a system. <br> \
                                Provided Application support for all ECAD Tools."
            }
		],
		"display": function () {
		    var rh = resHelper;
		    rh.addSectionBar('#workExperience');
		    $('#workExperience').append(window['HTMLworkStart']);
		    for (var i = 0; i < this.jobs.length; i++) {
		        rh.generateHTML(this.jobs[i], '.work-entry', 'HTMLwork', 'append', ['employer', 'title'], true);
		        rh.generateHTML(this.jobs[i], '.work-entry', 'HTMLwork', 'append', ['location', 'dates', 'description'], false);
		    }
		    rh.setAccordion('work-entry', false, 0,false);
		}
	};

var education = 
	{
	    "schools": [
			{
			    "name": "Southern Connecticut State University",
			    "location": "New Haven, Connecticut",
			    "degree": "AS",
                "major": ["Computer Science", "Physical Geography"],
			    "dates": "Sept. 1980-May 1984"
			},
            {
            	"name": "Nova University",
            	"location": "Davie, Florida",
            	"degree": "Classes towards BS",
            	"major": ["Computer Science"],
            	"dates": "Sept. 1994 - May 1996"
            }
	    ],
	    "onlineSchools": [
			{
			    "title": "Building a Site with Bootstrap, AngularJS, ASP.NET, EF and Azure",
			    "school": "Pluralsight",
			    "dates": "Aug. 2014 - Sept. 2014",
			    "url": "www.pluralsight.com"
			},
			{
			    "title": "AngularJS: Get Started",
			    "school": "Pluralsight",
			    "dates": "Aug. 2014 - Sept. 2014",
			    "url": "www.pluralsight.com"
			},
			{
			    "title": "Node.js for .NET Developers",
			    "school": "Pluralsight",
			    "dates": "July. 2014 - Aug. 2014",
			    "url": "www.pluralsight.com"
			},
			{
			    "title": "ASP.NET MVC 4 Fundamentals",
			    "school": "Pluralsight",
			    "dates": "2013",
			    "url": "www.pluralsight.com"
			},
            {
                "title": "UT.6.02x Embedded Systems - Shape the World",
                "school": "edX",
                "dates": "Jan. 2015 - May 2015",
                "url": "www.edx.org"
            }
	    ],
	    "display": function () {
	        var rh = resHelper;
	        rh.addSectionBar('#education');
	        $('#education').append(window['HTMLschoolStart']);
	        for (var i = 0; i < this.schools.length; i++) {
	            rh.generateHTML(this.schools[i], '.education-entry', 'HTMLschool', 'append', ['name', 'degree'], true);
	            rh.generateHTML(this.schools[i], '.education-entry', 'HTMLschool', 'append', ['dates', 'major'], false);
	        }
	        $("<div class='online'></div>").appendTo($('.education-entry'));

	        $("<div class='school-head'><span class='shead'></span></div>").appendTo($('.online'));
	        $('.shead').append(window['HTMLonlineClasses']);
	        for (var i = 0; i < this.onlineSchools.length; i++) {
	            rh.generateHTML(this.onlineSchools[i], '.online', 'HTMLonline', 'append', ['title', 'school'], true);
	            rh.generateHTML(this.onlineSchools[i], '.online', 'HTMLonline', 'append', ['dates', 'url'], false);
	        }
	        rh.setAccordion('education-entry', false, 0,false);
	    }
	};

var projects = 
{
    "projects": [
		{
		    "title": "South Florida Draw",
		    "dates": "Fall 2014",
		    "description": "Web Site for the South Florida Draw Lacrosse Tournament, sponsered by the non-profit South Florida Lacrosse Inc. The WebSite handles scheduling, scoring and real time standings.",
		    "images": [
                "images/fld-1.png",
                "images/fld-2.png",
                "images/fld-3.png",
		    ]
		}
    ],
    "display": function () {
        var rh = resHelper;
        rh.addSectionBar('#projects');
        $('#projects').append(window['HTMLprojectStart']);
        for (var i = 0; i < this.projects.length; i++) {
            rh.generateHTML(this.projects[i], '.project-entry', 'HTMLproject', 'append', ['title', 'dates', 'description'], false);
            for (var j = 0; j < this.projects[i].images.length; j++) {
                rh.generateHTML([this.projects[i].images[j]], '.project-entry', 'HTMLprojectImage', 'append', [], false);
            }
        }
        rh.setAccordion('project-entry', false, 0,false);
    }
};



//Helper object to display resume objects
var resHelper = {

    //object to hold normalized html helper object names
    htmlHelpers: {},
    
    //normalize all htmlhelpers in helper.js no more camel case
    getHtmlHelpers: function () {
        for (var p in window) {
            if (p.indexOf("HTML") != -1) {
                this.htmlHelpers[p.toLowerCase()] = window[p];
            }
        }
    },
    
    //Add click functionality to the section bar to activate accordion functionality. 
    setAccordion: function (divStr, isId, fixed, ajax) {
        var rh = this;
        var div = isId ? document.getElementById(divStr) : document.getElementsByClassName(divStr)[0];
        var $div = $( (isId ? '#' + divStr : '.' + divStr) );
        var $bar = $div.siblings('.section-bar');
        $div.css('display', "none");
        $bar.click(
            function () {
                var open = false;
                if ($div.css('display') === 'none') {
                    open = true;
                    $div.css('display', "");
                    if (ajax) { $div.css('opacity', 0); }
                    var x = fixed === 0 ? div.offsetHeight : fixed;
                    console.log("open : " + x.toString());
                    div.style.height = '4px';
                    var mod = x % 4;
                    x = (mod === 0 ? x : ((x + mod) % 4) === 0 ? (x + mod) : (x - mod));
                    rh.accordionFunc(div, 0, 4, x, fixed, ajax);
                } else {
                    var x = div.offsetHeight;
                    console.log("Close : " + x.toString());
                    var mod = x % 4;
                    var x = (mod === 0 ? x : ((x + mod) % 4) === 0 ? (x + mod) : (x - mod));
                    div.style.height = x.toString()+"px";
                    rh.accordionFunc(div, x, -4, 0, fixed, ajax);
                }
                $(window).trigger('resize');               
                if (open) {
                    $('html, body').animate({
                        scrollTop: $div.offset().top - 50
                    }, 2000);
                } else {
                    $('html, body').animate({
                        scrollTop: $('#header').offset().top - 50
                    }, 2000);
                }
            }        
        )
    },

    //Add the section bar to click for each section of the resume, work, projects, education and map
    addSectionBar: function (val) {
        $(val + ' h2').addClass('text');
        $("<div class='section-bar'></div>").prependTo($(val));
        $("<span class='typcn typcn-arrow-maximise typcn-bar'></span>").appendTo($(val + ' .section-bar'));
        $(val + ' .section-bar').prepend($(val + ' h2'));
    },
    
    //Object used to add icons in place of string values.
    socialIcons: {
        "mobile": "typcn typcn-device-phone footer-icon",
        "email": "typcn typcn-mail footer-icon",
        "github": "typcn typcn-social-github footer-icon",
        "blog": "typcn typcn-document-text footer-icon",
        "twitter": "typcn typcn-social-twitter footer-icon",
        "location": "typcn typcn-home footer-icon"
    },

    //Object to help setup display content for resume objects using htmlhelpers from helpers.js
    generateHTML: function (obj, htmlTarget, htmlHelper, _mode, order, cat) {
        var htmlHelpers = this.htmlHelpers;
        if (obj !== undefined && obj !== null) {
            var isArray = false;
            htmlHelper = htmlHelper.toLowerCase();
            if (order.length === 0) {
                if (Object.prototype.toString.call(obj) === '[object Array]') {
                    isArray = true;
                    for (var i = 0; i < obj.length; i++) { order.push(i) };
                } else {
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) { order.push(key) }
                    }
                }
            }
            var html = [], suffix;
            for (var val = 0; val < order.length; val++) {
                if (obj[order[val]] !== undefined && obj[order[val]] !== "") {
                    suffix = isArray === true ? "" : order[val].toLowerCase();
                    if (cat && html.length > 0) {
                        html[html.length - 1] = html[html.length - 1] + htmlHelpers[htmlHelper + suffix].replace(/%data%/, obj[order[val]]);
                    } else {
                        html.push(htmlHelpers[htmlHelper + suffix].replace(/%data%/, obj[order[val]]));
                    }
                }
            }
            for (var i = 0; i < html.length; i++) {
                (_mode === 'append') ? $(htmlTarget).append(html[i]) : $(htmlTarget).prepend(html[i]);
            }
        }
    },


    //function to display social Icons instead of string values.
    useSocialIcons: function () {
        rh = this;
        $('#footerContacts .flex-item .orange-text').each( function(i, val){
            $(val).addClass(rh.socialIcons[$(val).text()]);
            $(val).text("");
        })
    },

   //Used by showSkills function to aniate display of skills.
   animateSkills: function (i,obj){
       setTimeout(function () { obj.animate({ 'opacity': 1 }, 400); }, 500 * i);
   },

    //function to display skills in the bio object. Called when window is loaded.
   showSkills: function () {
        setTimeout(function () {
            $("#skills li").each(function (i, value) {
                resHelper.animateSkills(i + 1, $(value));
            });
        }, 750);
    },

    //Function used perform accordion functionality
    accordionFunc: function (div2, h, inc1, val1, f, ajax) {
        var evt = document.createEvent('UIEvents');
        var $div = $(div2);
        if (h !== val1) {
            h += inc1;
            div2.style.height = h.toString() + "px";
            if (h === val1) {
                if (h === 0) {
                    div2.style.display = "none";
                    $div.css("padding-bottom", "0");
                } else {
                    $div.css("padding-bottom", "10px");
                    evt.initUIEvent('resize', true, false, window, 0);
                    if (ajax) {
                        setTimeout(function () { window.dispatchEvent(evt); }, 100);
                        setTimeout(function () { window.dispatchEvent(evt); $div.animate({ opacity: 1 }, 2500); }, 400);
                    }
                }
                div2.style.height = f === 0 ? "auto" : (f.toString() + "px");
            }
            setTimeout(function () { resHelper.accordionFunc(div2, h, inc1, val1, f, ajax) }, 1);
        } else {
            var parent = $div.parent();
            parent.find(".typcn").hasClass('typcn-arrow-minimise') ? parent.find(".typcn").toggleClass('typcn-arrow-minimise typcn-arrow-maximise') :
                                                                     parent.find(".typcn").toggleClass('typcn-arrow-maximise typcn-arrow-minimise');
        }
    }
}

//when the window is loaded show the skills
window.onload = resHelper.showSkills;

//Normalize the htmlhelpers in helper.js
resHelper.getHtmlHelpers();

//Create a extra div for main body content.
$('<div id="body"> </div>').prependTo($('#main'));

//order content in existing index.html file
$('#mapDiv').prependTo($('#body'));
$('#projects').prependTo($('#body'));
$('#education').prependTo($('#body'));
$('#workExperience').prependTo($('#body'));
$('#header').prependTo($('#main'));

//Load display content for each resume section
bio.display();
work.display();
projects.display();
education.display();

//Add map to resume
$("#mapDiv").append(window['googleMap']);

//Add section bar and accordion functionality for map
resHelper.addSectionBar("#mapDiv");
resHelper.setAccordion('map', true, 400, true);

//Toggle colors for all section bars added
$(".section-bar").each(function (index) {
    var color = index % 2 ? '#00bfff' : '#3399FF';
    $(this).css("background-color", color);
});

//Use the social Icons for Contact info instead String values
resHelper.useSocialIcons();

