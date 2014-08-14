
define(function(require, exports, module) {

	var projects = {
		projects : [
			{
            "id": 1,
            "name": "Software Visualization",
            "subtitle": "Visualization of Complexity<\/strong> by means of Software",
            "date": "2008",
            "author": "Dominik Schlaepfer",
            "coffee": "120 Cups",
            "tags": {
                "tag_1": "programming",
                "tag_2": "3d"
            },
            "media": {
                "pdf": "Software Visualization.pdf",
                "movie": "http:\/\/www.youtube.com\/watch?v=gW_IMd5KqM4"
            },
            "pics": [
                0,
                1
            ],
            "description": "Aim of this project is the visualization of complex relations of items in big systems. \n\t\t \t\tSoftware code and Software architecture as a very abstract and very complex metaphor, oppose a good example \n\t\t \t\tto examine the benefits of visualization over pure code and alphanumerically written codes and metaphors. \n\t\t \t\tThe visualization in the project is about method-calls in software projects. The main idea is to visualize a \n\t\t \t\tcertain method-call and see what other methods are triggered by this call. The visualization takes part in a 3D-space, \n\t\t \t\twhich enables the user to look at the method-call tree from different perspectives. The different perspectives provide \n\t\t \t\tdifferent views and different conclusions to the method-call."
        },
        {
            "id": 2,
            "name": "Interaction Dynamics",
            "subtitle": "Research new Interaction metaphors<\/strong>",
            "date": "2007",
            "author": "Dominik Schlaepfer",
            "coffee": "80 Cups",
            "tags": {
                "tag_1": "programming",
                "tag_2": "design"
            },
            "media": {
                "pdf": "Interaction Dynamics.pdf",
                "movie": "",
                "swf": "Interaction Dynamics.swf"
            },
            "pics": [
                0,
                1
            ],
            "description": "Interaction Dynamics is about examining interaction models. The task was to establish Interaction models to\n\t\t contradictory terms such as: big - small, many - few, inner - outer, visible - invisible."
        },
        {
            "id": 3,
            "name": "ZagHdk Radio",
            "subtitle": "Interactive GPS Hearplay<\/strong>",
            "date": "2010",
            "author": "Dominik Schlaepfer, Lilian Kraus",
            "coffee": "Cups",
            "tags": {
                "tag_1": "physical",
                "tag_2": "programming"
            },
            "media": {
                "www": "http:\/\/www.bwart.ch\/radioZagHdaK\/",
                "movie": "http:\/\/www.youtube.com\/watch?v=ltFjPXyVbr8",
                "swf": ""
            },
            "pics": [
                0,
                1
            ],
            "description": "Core-concept: ZagHdaK Radio is an interactive GPS hear-play created at ZHdK in October 2009. \n\t\t The main concept is to have a real physical space (in our case Z\u00fcrich) in which a user can move around randomly.\n\t\t This physical reality is then overlayed by a second perception layer (in our case audio feedback) which is supposed\n\t\t to guide the user around in the physical reality and provide him with different audio information depending on the\n\t\t chosen way. ZagHdaK-Radio plays with contrasts between imagination and reality and extends awareness and perception. \n\t\t Concept realisation: As second perception layer the ZagHdaK-Radio concept features an imaginary setup of an unnamed \n\t\t city in the Middle East. This imaginary layer is invisibly mapped over the physical reality and represented by audio \n\t\t feedback. Certain predefined points on the reality layer trigger certain soundactions on the audio layer. Interactivity\n\t\t is provided by the way we move around and by the way approaching the predefined points. When strolling around far from\n\t\t the predefined points the user is provided with monotonous audio-heartbeat; when approaching a point, the heartbeat speeds\n\t\t up and finally, depending on distance to that point, triggers different sounds. Every point is accessible by different\n\t\t streets and depending on the route chosen, one approaches the point in another context (correspondingly different sound is\n\t\t played on the audio-layer). The predefined points and the corresponding soundfiles are arranged in a way that individual\n\t\t narratives emerge when moving around. ZagHdaK radio is partly political since it talks about problematic tendencies in\n\t\t world politics but does not consider itself as a purely political project; ZagHdaK radio features different approaches of\n\t\t everyday life in a middle eastern town. "
        },
        {
            "id": 4,
            "name": "The Future Car",
            "subtitle": "How does the future car<\/strong> sound?",
            "date": "2010",
            "author": "Dominik Schlaepfer",
            "coffee": "100+ Cups",
            "tags": {
                "tag_1": "sound",
                "tag_2": "programming"
            },
            "media": {
                "pdf": "",
                "movie": "http:\/\/www.youtube.com\/watch?v=wI6bHefuae0",
                "swf": ""
            },
            "pics": [
                0,
                1
            ],
            "description": "This project is a cooperation project with Volkswagen. The topic is the future sound of cars. Volkswagen\n\t\t provided and Audi G5 equipped with sensors. These sensors fed a Pure Data patch with data. The patch again interpreted this\n\t\t data and forwarded it to a synthezizer which created the final audio outupt. The task was to set the process of boarding a \n\t\t car to sound. (Sensors were placed in the door (open and close), the seat (sit down) and the security belt (closing)). \n\t\t A research revealed, that the design of car shapes incline more and more organic features in future sketches. This project \n\t\t tries to apply this paradigm shift to the world of sounds. Three organic sound-skins were developped: liquid, bone and earthy."
        },
        {
            "id": 5,
            "name": "GYG Mobile",
            "subtitle": "What do you want to do here and now<\/strong>?",
            "date": "2011",
            "author": "Dominik Schlaepfer",
            "coffee": "250 Cups",
            "tags": {
                "tag_1": "programming",
                "tag_2": ""
            },
            "media": {
                "pdf": "",
                "movie": "http:\/\/www.youtube.com\/watch?v=eCB6MdMHMGU",
                "swf": ""
            },
            "pics": [
                0,
                1
            ],
            "description": "GetYourGuide is a booking website for tours & activities. From sightseeing by bus to shark diving,\n\t\t GetYourGuide offers the full spectrum of things to do for your next vacation or weekend adventure. In order to make\n\t\t the range of activities available in a more spontaneous way and with location based suggestions, GetYourGuide provides\n\t\t a basic version of the main website for Mobile usage. It is possible to get location based suggestions by the system or\n\t\t just browsing around tours and activities. The booking process is fully integrated and a Ticket is saved on the Local \n\t\t Storage of the Smartphone. The site is available under www.getyourguide.com, supported platforms are iPhone and Android.\n\t\t The Mobile Website is not a native smartphone application, but a web application (PHP &MySQL) optimized for smart phone\n\t\t usage."
        },
        {
            "id": 6,
            "name": "iPad Media control",
            "subtitle": "Get rid of your remote controls!<\/strong>",
            "date": "2012",
            "author": "Dominik Schlaepfer",
            "coffee": "123 Cups",
            "tags": {
                "tag_1": "programming",
                "tag_2": ""
            },
            "media": {
                "pdf": "",
                "movie": "http:\/\/www.youtube.com\/watch?v=n3ULKeY49Pg",
                "swf": ""
            },
            "pics": [
                0,
                1
            ],
            "description": "..."
        },
        {
            "id": 7,
            "name": "Dynament",
            "subtitle": "The future of media and commenting",
            "date": "2010",
            "author": "Dominik Schlaepfer",
            "coffee": "200 Cups",
            "tags": {
                "tag_1": "design",
                "tag_2": "programming"
            },
            "media": {
                "pdf": "Dynament.pdf",
                "movie": "http:\/\/www.youtube.com\/watch?v=tWNU4cw-MuM",
                "www": "http:\/\/www.meta-vue.ch\/BAdocu\/wordpress\/"
            },
            "pics": [
                0,
                1
            ],
            "description": "Ever since the web has become participative there are huge amounts of comments to nearly any kind of\n\t\t web content. Research shows that comments harbour underestimated information-carrier potential. Dynament is a concept which\n\t\t focuses on different web user groups and their distinguished acquaintances in relation with comments. The video featured\n\t\t in the media-section shows the concept video. Dynament helps the user to get more information out of comments. For further\n\t\t information check this link, there is plenty of information available.\n\t\t The project included the following steps: background research, user inquiry, concept, first prototype, evaluation, iterated \n\t\t prototype. "
        },
        {
            "id": 8,
            "name": "Screen Typo",
            "subtitle": "A visionary synchronoptic<\/strong> program header for arte TV",
            "date": "2008",
            "author": "Dominik Schlaepfer",
            "coffee": "67 Cups",
            "tags": {
                "tag_1": "programming",
                "tag_2": "design"
            },
            "media": {
                "pdf": "Screentypography.pdf",
                "movie": "http:\/\/www.youtube.com\/watch?v=24zym4BERBc",
                "swf": ""
            },
            "pics": [
                0,
                1
            ],
            "description": "Screentypography features a synchronoptic program header for arte TV. The challenge is to present the TV-program and its contents\n\t\t (pictures, program-information, meta-data) in a user friendly and easily accessible way. The project uses the wheel as a time metaphor and provides the user\n\t\t with a micro and macro view to switch inbetween."
        }
        // ,
        // {
        //     "id": 9,
        //     "name": "Web Clipper",
        //     "subtitle": "Memonic Webclipper Redesign",
        //     "date": "2011",
        //     "author": "Dominik Schlaepfer",
        //     "coffee": "20 Cups",
        //     "tags": {
        //         "tag_1": "design",
        //         "tag_2": ""
        //     },
        //     "media": {
        //         "pdf": "",
        //         "movie": "http:\/\/www.youtube.com\/watch?v=B485EmPIvtM",
        //         "swf": ""
        //     },
        //     "pics": [
        //         0,
        //         1
        //     ],
        //     "description": "The context of this project was an assessment-task for Memonic (Webclipping Software Company). My project focuses\n\t\t on the concept of a horizontal and vertical alignment of the Webclipper-Toolbar. Depending on the content it is important for the \n\t\t user to have the choice where to align the toolbar so it does not interfere with the content."
        // },
        // {
        //     "id": 10,
        //     "name": "Encoding Space",
        //     "subtitle": "A digital, artistic abstraction of space!",
        //     "date": "2007",
        //     "author": "Dominik Schlaepfer",
        //     "coffee": "80 Cups",
        //     "tags": {
        //         "tag_1": "programming",
        //         "tag_2": "design"
        //     },
        //     "media": {
        //         "pdf": "Encoding Space.pdf",
        //         "movie": "https:\/\/www.youtube.com\/watch?v=NtSW6oWrajg",
        //         "swf": ""
        //     },
        //     "pics": [
        //         0,
        //         1
        //     ],
        //     "description": "Starting point in this project is a public space of about 100m in the city of Zurich. This space is analysed, segemented and in different steps digitalized. The digitalized abstractions are set together and animated. The space in its abstraction should be experienced with the animation. In this project the space featured is a 100 meter space at Langstrasse in Zurich. "
        // },
        // {
        //     "id": 11,
        //     "name": "Black Box",
        //     "subtitle": "Physical Computing meets Interaction Design",
        //     "date": "2009",
        //     "author": "Dominik Schlaepfer",
        //     "coffee": "120 + Cups",
        //     "tags": {
        //         "tag_1": "physical",
        //         "tag_2": "programming"
        //     },
        //     "media": {
        //         "pdf": "Black Box.pdf",
        //         "movie": "https:\/\/www.youtube.com\/watch?v=O0Z-Nd8ESRA",
        //         "swf": ""
        //     },
        //     "pics": [
        //         0,
        //         1
        //     ],
        //     "description": "Black Box is, as the name suggests a black box from which only the measures are given. The task was to give the box functionality.\nThe concept of our project was to create a black box equipped with a light-sensor, that could, while moving it around like a computer mouse, distinguish between black and white surfaces and give the user a haptic feedback about it."
        // }
		]
	}

    module.exports = projects;
});
