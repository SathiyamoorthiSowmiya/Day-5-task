1; //! 1.create your own resume data in JSON format:

let resumeData = {
  "name": "sowmi",
  "title": "Software Engineer",
  "contact": {
      "email": "sowmi04@example.com",
      "phone": "9876543212",
      "address": "gandhi street,chennai"
  },
  "education": [
      {
          "degree": "Bachelor of Science in Computer Science",
          "institution": "crescent University",
          "year": "2022",
          "location": "vandalur"
      }
  ],
  "experience": [
      {
          "position": "data analyst",
          "company": "Accenture.",
          "startDate": "2023-05-02",
          "endDate": "2024-06-04",
          "location": "sholinganallur",
          "responsibilities": [
              "Developed and maintained data applications.",
              "Develop and maintain data pipelines for seamless data flow."

          ]
      }
  ],
  "skills": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML/CSS",
      "AWS",
      "Git"
  ],
  "languages": ["English","tamil"],
  "interests": ["Web Development", "data executive", "story reading"]
};

console.log(JSON.stringify(resumeData, null, 2));

//--------------------------------------------------------------------------------------------------


//! 2.for the above JSON iterate over all loops (for, for in, for of , for each)

//!For Loop:

let keys = Object.keys(resumeData);
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (Array.isArray(resumeData[key])) {
        console.log(`${key}:`);
        for (let j = 0; j < resumeData[key].length; j++) {
            console.log(resumeData[key][j]);
        }
    } else if (typeof resumeData[key] === 'object') {
        console.log(`${key}:`);
        let subKeys = Object.keys(resumeData[key]);
        for (let j = 0; j < subKeys.length; j++) {
            let subKey = subKeys[j];
            console.log(`${subKey}: ${resumeData[key][subKey]}`);
        }
    } else {
        console.log(`${key}: ${resumeData[key]}`);
    }
}

//----------------------------------------------------------------------------------------------------------
//!For in Loop:

for (let key in resumeData) {
  if (Array.isArray(resumeData[key])) {
      console.log(`${key}:`);
      resumeData[key].forEach(item => console.log(item));
  } else if (typeof resumeData[key] === 'object') {
      console.log(`${key}:`);
      for (let subKey in resumeData[key]) {
          console.log(`${subKey}: ${resumeData[key][subKey]}`);
      }
  } else {
      console.log(`${key}: ${resumeData[key]}`);
  }
}
  
//------------------------------------------------------------------------------------------------------
//!For of Loop:

for (let key of Object.keys(resumeData)) {
  if (Array.isArray(resumeData[key])) {
      console.log(`${key}:`);
      for (let item of resumeData[key]) {
          console.log(item);
      }
  } else if (typeof resumeData[key] === 'object') {
      console.log(`${key}:`);
      for (let subKey of Object.keys(resumeData[key])) {
          console.log(`${subKey}: ${resumeData[key][subKey]}`);
      }
  } else {
      console.log(`${key}: ${resumeData[key]}`);
  }
}

//--------------------------------------------------------------------------------------------------------
//!For Each Loop:

Object.keys(resumeData).forEach(key => {
  if (Array.isArray(resumeData[key])) {
      console.log(`${key}:`);
      resumeData[key].forEach(item => console.log(item));
  } else if (typeof resumeData[key] === 'object') {
      console.log(`${key}:`);
      Object.keys(resumeData[key]).forEach(subKey => {
          console.log(`${subKey}: ${resumeData[key][subKey]}`);
      });
  } else {
      console.log(`${key}: ${resumeData[key]}`);
  }
});

