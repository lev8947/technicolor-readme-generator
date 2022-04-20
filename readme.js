// create function to source correct badge url, based on selected license
function generateBadgeUrl(licence){
    return `https://img.shields.io/badge/licence-${encodeURIComponent(licence)}-blueviolet`;
}
// create function to show license details when selected
function generateLicenseInfo(licence){
    if (licence === "GNU GPLv3"){
        return "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights."
    };
    if (licence === "MIT"){
        return "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code."
    };
    if (licence === "Unlicence") {
        return "A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code."
    }
}
// generate the readme, based on the answers provided by the user
function generateReadme(answers) {
    
// project title, description, license choice, table of contents, installation, usage, contribution info, questions, test instructions
return `# ${answers.projecttitle}

## Project Description
${answers.projectdescription}
    
## License
![License](${generateBadgeUrl(answers.license)})
This project is licensed under a ${answers.license} License. ${generateLicenseInfo(answers.license)}.

## Table of Contents
    
   - [Installation Instructions](#installation-instructions) 
   - [Usage Information](#usage-information) 
   - [Contribution Information](#contribution-information) 
   - [Questions](#questions) 
   - [Test Instructions](#test-instructions) 


## Installation Instructions
${answers.installation}    
   
## Usage Information
${answers.usage}    

## Contribution Information
Contributors on this project are:
${answers.contribute} - www.github.com/${answers.contribute}

## Questions
If you have any questions about this project, please contact the project creator: ${answers.contribute} via email at ${answers.email}.

## Test Instructions
${answers.test}`   
    
    }
// generate the readme file
    module.exports = {
        generateReadme
    
}