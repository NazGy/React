import facially from '../pictures/Facialy_Logo.png'
import balanceCheck from '../pictures/BalanceCheck_Logo.png'
import radar from '../pictures/Radar_Logo.png'
import elementScanner from '../pictures/ElementScanner_Logo.png'
import myInterviewer from '../pictures/MyInterviewer_Logo.png'
import smileML from '../pictures/SmileML_logo.png'
import nemo from '../pictures/Nemo_logo.png'
import twitter from '../pictures/Twitter_logo.png'
import radar1 from '../pictures/Radar_1.png'
import radar2 from '../pictures/Radar_2.png'
import radar3 from '../pictures/Radar_3.png'
import radar4 from '../pictures/Radar_4.png'
import radar5 from '../pictures/Radar_5.png'
import radar6 from '../pictures/Radar_6.png'
import smileML1 from '../pictures/csc420_1.png'
import smileML2 from '../pictures/csc420_2.png'
import twitter1 from '../pictures/Final_Project-1.png'
import twitter2 from '../pictures/Final_Project-2.png'
import twitter3 from '../pictures/Final_Project-3.png'
import twitter4 from '../pictures/Final_Project-4.png'
import twitter5 from '../pictures/Final_Project-5.png'
import nemo1 from '../pictures/nemo_1.png'
import nemo2 from '../pictures/nemo_2.png'
import nemo3 from '../pictures/nemo_3.png'
import nemo4 from '../pictures/nemo_4.png'

const radar_video = 'https://youtu.be/ITwl_mZSy-4'
const balanceCheck_video1 = 'https://youtu.be/v7scyYT9m5U'
const balanceCheck_video2 = 'https://youtu.be/vJToANBcGMA'


export const projects = [
    {
        "name": "Nemo",
        "date": "2021",
        "setting": "CSC302",
        "description": [
            "A medical documentation and administrative system designed to reduce the need of manual COVID test reporting accross Canada",
            "Developed using React, expressJS and MongoDB supported with Github workflows, Jest and Cypress to monitor and maintain environment stability"
        ],
        "logo": nemo,
        "dialogue": {
            "images": [nemo1, nemo2, nemo3, nemo4]
        }
    },
    {
        "name": "Twitter Sentiment Analysis Paper",
        "date": "2021",
        "setting": "CSC413",
        "description": [
            "A peer-reviewed research study on classifying public Twitter messages in accordance with positive or negative emotion using machine learning algorithms",
            "Researched and compared two unique approaches using transfer learning with the BERT transofmrer model"
        ],
        "logo": twitter,
        "dialogue": {
            "images": [
                twitter1, twitter2, twitter3, twitter4, twitter5
            ]
        }
    },
    {
        "name": "SmileML",
        "date": "Fall 2020",
        "setting": "CSC420",
        "description": [
            "A research study attempting to generate a smile on the face of a person using computer vision algorithms",
            "Used pytorch to develop a convolutional autoencoder and Generative Adversial Network to reconstruct a blank spot on a face as a smile",
        ],
        "logo": smileML,
        "dialogue": {
            "images": [
                smileML1, smileML2
            ]
        }
    },
    {
        "name": "R.A.D.A.R",
        "date": "April-August 2020",
        "setting": "Intact",
        "description": [
            "A web app solution to monitor and maintain environment stability by aggregating automated test data and build status reports to help over 100 employees",
            "Deployed with React as the front end, flask as back end using a MongoDB database.",
            "Created an proffessional commercial seen by vice-presidents, that displays key features of the application."
        ],
        "logo": radar,
        "dialogue": {
            "images": [
                radar1, radar2, radar3, radar4, radar5, radar6
            ],
            "video": [radar_video]
        }
    },
    {
        "name": "MyInterviewer",
        "date": "March 2020",
        "setting": "NewHacks",
        "description": [
            "Created a web app made with React that prompts common interview questions and listens for speech responses in real time",
            "Google API Speech to text was used to process audio and Flask was used for the backend"
        ],
        "logo": myInterviewer
    },
    {
        "name": "Element Scanner",
        "date": "2019",
        "setting": "Intact",
        "description": [
            "A machine learning solution in Python for locator errors in automation frameworks",
            "Developed using Python libraries like scipy, numpy and flask",
            "Presented the solution in front of lead manager for software department of commercial lines"
        ],
        "logo": elementScanner
    },
    {
        "name": "Facial.ly",
        "date": "2019-2020",
        "setting": "UoftAI",
        "description": [
            "Developed a Neural Network in TensorFlow using transfer learning to classify multiple facial features of a given image.",
            "Developed using Python libraries like scipy, numpy and flask",
        ],
        "logo": facially
    },
    {
        "name": "BalanceCheck",
        "date": "2018",
        "setting": "CSC301",
        "description": [
            "Developed a React web application with Django as the back end, that validates the correctness of online news articles through user feedback"
        ],
        "logo": balanceCheck,
        "dialogue": {
            "video": [balanceCheck_video1, balanceCheck_video2]
        }
    }
]