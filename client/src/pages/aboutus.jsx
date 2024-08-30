import React, { useState, useEffect } from "react";
import alu1 from "../images/12PA1A0339.jpg";
import alu2 from "../images/19PA1A1202.jpg";
import alu3 from "../images/13PA1A04A2.jpg"; 
import alu4 from "../images/17PA1A0152.jpg"; 
import alu5 from "../images/08PA1A0264.jpg"; 
import alu6 from "../images/17PA1A1205.jpg"; 
import alu7 from "../images/15PA1A0407.jpg"; 
import alu8 from "../images/09PA1A1220.jpg"; 
import {
    Heading,
    Text, Stack, Card, CardBody, Image, Center,
    Divider, Flex, Box,
} from '@chakra-ui/react';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);
const alumniData = [{
  name: "Peddireddi Kranthi Pavan",
      position: "Deputy Manager-Siemens",
      description: " I want to convey at most Gratitude to VIT for giving an opportunity to the Post of GET at Rane Group. It was all because of Motivated & Intellectual Teaching Staff Guided me for choosing good career path. Even today I can make Myself unique in a Team of Peers. Finally, my heartfelt gratitude to all Professors of Mechanical Engineering Department and Administration of VIT for providing a Challenging Environment during Engineering.",
      image: alu1
  },
  {
      name: "B Karuna",
      position: "Software Engineer - NCR Corporation",
      description: "the best thing I would like to say first is about our HOD and Department staff, They are very supportive in all aspects and encouraged me in every aspect which has helped me to build myself and my career very strongly. Whatever the management has promised about placements or changes academically they did and they will do it. No outside training is required specifically in order to get a job, The training, and the technologies the college giving is more than enough. Trust me you have chosen the best college.",
      image: alu2
  },
  {
      name: "Patta Gayatri Devi",
      position: "Software Engineer - Cognizant",
      description: "I learnt so much from my college. I was a hostel student and it helped me grow emotionally too. I was a very active student throughout my academics and my faculty helped me always. They always encouraged me to take part in speeches, debates and paper presentations which helped me improve my communication skills and face stage fear. This process helped me through my interviews and I secured on campus placement in Capgemini. The college environment is so good and peaceful for the mind. I spent so much time with friends having long walks almost everyday in college. There is a lot of effort that goes into from management side to take care of the students both in their academics as well as their health. We even had very good medical facilities available and thats more than enough for any hostler to wish for. It was a roller coaster ride with all the semester exams, placements, fresher parties and farewell. I am really glad that I get to go for college here and take home so many great experiences and lessons that I learnt along. I hope you all get to see much more than I did. All the best for the bright future.",
      image: alu3
  },{
    name:"Venkata Pavan",
    position:"Motor Control Firmware Engineer - Texas Instruments",
    description:"I had a splendid and wonderful college time at VIT Bhimavaram.Being the first batch students, we had typical doubts while joining the college about the placements, Infrastructure & Faculty.But once we entered the college, interacted with the Faculty and explored the campus all of our doubts disappeared within no time. By the time we finished our 4 years of wonderful journey, apart from our regular classroom sessions we were also provided with numerous workshops and guest lectures on being productive, disciplined, self- motivated and contentful which are equally important to be successful in today's corporate job world.These qualities reflect in all of our Alumni which helped us to be successful and being standout in whichever path & Jobs we chose. College has always encouraged, motivated  and enabled us to become curious, exploring and technically strong Engineers.And that's why I've always enjoyed coming to college everyday.I congratulate you for selecting this college and I strongly believe with the kind of Vision, Mission and Values VIT management has it will help students in every possible way not just in making Engineer's but a successful one's.",
    image:alu5
  },{
    name:"Shaik Pavan Kumar",
    position:"Associate Software Engineer - Accenture",
    description:"Choosing VIT is initial right decision made by me which laid a path to my career by providing supportive faculty, world class infrastructure, practical and industrial exposure, ethical and moral guidance throughout my bachelors. Being a Civil Engineering Student it is a not a Piece of Cake to get placed as a software engineer with a good package but my department Faculty motivated me in taking a big step and guidance from placement team added a value in learning how to code and solve complex programs. Currently I am working as Associate Software Engineer at Accenture with a decent package. Thanks for faculty, Placement Team and College Management for helping and supporting me in all the aspects.",
    image:alu4
  },{
    name:"Rohin Surya Prakash Bellamkonda",
    position:"Trainee Software Engineer - IVY Competch",
    description:"Firstly i am glad to thank my faculty and college for all the support given by them. In our college, our staff is supportive to participate in the workshops, seminars, fests, competitive programming tests. We have a CAP(Career Advancement Programme), in CAP they taught us how to do competitive programming. In BTech 3rd year is the most important year for all the students for placements. In my third year, COVID-19 hits the world. At that time all the world shutted down. But our college supported us alot in preparing for placements. We have daily exams(technical,aptitude,essay writing), mock interviews, group disccusions in online. After the exams, interviews completion they had shared their feedback to improve ourselves. By the support of my faculty i have got placement in 6 MNC companies like TCS, WIPRO, INFOSYS, CAPGEMINI, ACCENTURE, IVY. I have learnt competitive programming alot in our college in platforms like Geeks for Geeks, InterviewBit, Hackerrank, HackerEarth, CodeChef, LeetCode etc. I have learned coding in college and it is easy to work after being placed in a company here.",
    image:alu6
  },{
    name:"Avisineni Pavan Kalyan",
    position:"Consultant -Department of Planning & Environment  - Coforge DPA - Australia",
    description:"College is a place which can change zeros to heros and I feel that our college is having such capability. It tries to improve itself to give its best to students like an everyday learner. I saw students studying just not subjects but life too when they are in college, which I see it as a wonderful experience.",
    image:alu7
  },{
    name:"K Vamsi Krishnam Raju",
    position:"Senior Data Engineer - Agilisium",
    description:"Way back in 2009 , I joined VIT to gain my Bachelor degree. At the time of joining, VIT is just 1 year old college but my strong belief towards the quality of education that BV Raju society delivers had made me opt VIT as my first choice among all the options that I had. That is the best decision i have ever made. My seniors are most welcoming and friendly. All the faculty in VIT are best in their respective departments and are committed towards the growth of their students career. I would like to specially thank my HOD and faculty of IT department for providing the best education and also for the care they have taken to guide me in each and every phase of my Btech career. To all my dear juniors, I would like to say only one thing. In Vishnu, we have all the facilities that most of the colleges might not have. May it be education or placements or extra curriculars, VIT has the best of everything. The only thing you need to do is to utilise them to the fullest and have the best college life with outstanding placements. All the best.",
    image:alu8}
];

const AboutUs = () => {
  const data = {
    labels: ["2017-18", "2018-19", "2019-20", "2020-21", "2021-22","2022-23"],
    datasets: [
      {
        label: 'Placements record (Past 6 Academic Years)',
        backgroundColor: "black",
        borderWidth: 1,
        data: [527,535,676,954,1471,1298],
        maxBarThickness:120, 
      },
    ],
  };

  const options = {
    scales: {
      x:{
        title:{
          display: true,
          text: 'Academic Year', 
          color: 'black',
          font:{
            size:20
          }
        },
  
        ticks: {
          color: 'black',
        },
      },
      y: {
        title:{
          display: true,
          text: 'Number of Students Placed', 
          color: 'black',
          font:{
            size:15
          }
        },
        ticks: {
          color: 'black',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'black',
        },
      },
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % alumniData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentAlumni = alumniData[currentIndex];

  return (
    <>
      <br /><br />
      <Heading
          backgroundColor="black"
          color="bisque"
          textAlign="center"
      >
          Our Success Stories
      </Heading>
      <br />

      <Center>
          <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              width="80%"
              p={4} // Added padding
              boxShadow="lg"
              borderRadius="md"
          >
              <Image
                  objectFit='cover'
                  maxW={{ base: '100%', sm: '200px' }}
                  src={currentAlumni.image}
                  alt={currentAlumni.name}
              />

              <Stack>
                  <CardBody>
                      <Heading size='md'>{currentAlumni.name}</Heading>
                      <Text fontWeight="bold" color="gray.600">{currentAlumni.position}</Text>
                      <Text py='2'>
                          {currentAlumni.description.length > 300 
                            ? `${currentAlumni.description.substring(0, 300)}...` 
                            : currentAlumni.description}
                      </Text>
                  </CardBody>
              </Stack>
          </Card>
      </Center>
      <br /><Divider /><br />

      <Heading
          backgroundColor="black"
          color="bisque"
          textAlign="center"
      >
          Our Placement Records
      </Heading>
      <br />
      <Center>
        <Flex direction={{ base: "column", md: "row" }} alignItems="center">
          <Box
            backgroundColor="black"
            color="bisque"
            fontSize={20}
            width={{ base: "90%", md: "50%" }}
            p={4}
            mb={{ base: 4, md: 0 }}
            borderRadius="md"
            boxShadow="lg"
            textAlign="center"
          >The Training and Placement Cell helps students develop their Intrapersonal skills and abilities so as to enhance their personality as well as help them get placed in reputed organization.
          Vishnu Institute of Technology is one of the very few colleges where the concept of Training and development has been given importance in par with Academics.</Box>
          <Box
            width={{ base: "90%", md: "45%" }}
            backgroundColor="bisque"
            border="white"
            borderWidth={10}
            p={4}
            ml={{ base: 0, md: 4 }}
            borderRadius="md"
            boxShadow="lg"
          >
            <Bar data={data} options={options} />
          </Box>
        </Flex>
      </Center>
    </>
  );
}

export default AboutUs;
